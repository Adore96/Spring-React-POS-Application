import React, {Component} from 'react';
import BillService from "../../services/BillService";

class BillListComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            bills: [],
        }
    }

    updateBill = (id) => {
        this.props.history.push(`/update-bill/${id}`);
    }

    deleteBill = (id) => {
        BillService.deleteBill(id).then(res => {
            this.setState({bills: this.state.bills.filter(bill => bill.id !== id)});
        })
    }

    viewBill = (id) => {
        this.props.history.push(`/view-bill/${id}`);
    }

    componentDidMount() {
        //then refers with a JS Promise
        BillService.getBills().then((response) => {
            this.setState({
                bills: response.data
            })
        });
    }

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-sm-4"></div>
                    <div className="col-sm-6">
                        <h1 className="text-left" style={{marginTop: "10px"}}>Bill List</h1>
                    </div>
                    <div className="col-sm-2">
                        <button style={{marginTop: "25px"}}
                                className="btn btn-primary">Add Bill
                        </button>
                    </div>
                </div>
                <br/>
                <table className="table table-striped">

                    <thead>
                    <tr>
                        <th>Bill Code</th>
                        <th>Name</th>
                        <th>Amount Remaining/KG</th>
                        <th>Unit Price/LKR</th>
                        <th>Supplier</th>
                        <th>Actions</th>
                    </tr>
                    </thead>

                    <tbody>
                    {
                        this.state.bills.map(
                            bill =>
                                <tr key={bill.id}>
                                    <td>{bill.billamount}</td>
                                    <td>{bill.payment}</td>
                                    <td>{bill.paymentmethod}</td>
                                    <td>{bill.unitprice}</td>
                                    <td>{bill.supplier}</td>
                                    <td>
                                        <button onClick={() => this.updateBill(bill.id)}
                                                className="btn btn-outline-info">Update
                                        </button>
                                        <button style={{marginLeft: "10px"}} onClick={() => this.deleteBill(bill.id)}
                                                className="btn btn-outline-danger">Delete
                                        </button>
                                        <button style={{marginLeft: "10px"}} onClick={() => this.viewBill(bill.id)}
                                                className="btn btn-outline-success">View Details
                                        </button>
                                    </td>
                                </tr>
                        )
                    }
                    </tbody>
                </table>
            </div>
        );
    }
}

export default BillListComponent;
