import React, {Component} from 'react';
import BillService from "../../services/BillService";
import CommonService from "../../services/CommonService";

class BillListComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            bills: [],
        }
    }

    addBill = () => {
        this.props.history.push('/add-bill');
    }

    updateBill = (id) => {
        console.log(id+" Bill List Component");
        this.props.history.push(`/update-bill/${id}`);
    }

    deleteBill = (id) => {
        BillService.deleteBill(id).then(res => {
            this.setState({bills: this.state.bills.filter(bill => bill.id !== id)});
        })
    }

    downloadBill = (id) => {
        this.props.history.push(`/download-bill/${id}`);
    }

    componentDidMount() {
        //then refers with a JS Promise
        CommonService.getAllBills().then((response) => {
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
                                onClick={() => this.addBill()}
                                className="btn btn-primary">Add Bill
                        </button>
                    </div>
                </div>
                <br/>
                <table className="table table-striped">

                    <thead>
                    <tr>
                        <th>Invoice Number</th>
                        <th>User Name</th>
                        <th>Bill Amount</th>
                        <th>Payment/LKR</th>
                        <th>Payment Method</th>
                        <th>Created Time</th>
                        <th>Actions</th>
                    </tr>
                    </thead>

                    <tbody>
                    {
                        this.state.bills.map(
                            bill =>
                                <tr key={bill.id}>
                                    <td>{bill.id}</td>
                                    <td>{bill.useridfk}</td>
                                    <td>{bill.billAmount}</td>
                                    <td>{bill.payment}</td>
                                    <td>{bill.paymentMethod}</td>
                                    <td>{bill.createdTime}</td>

                                    <td>
                                        <button onClick={() => this.updateBill(bill.id)}
                                                className="btn btn-outline-info">Update
                                        </button>
                                        <button style={{marginLeft: "10px"}} onClick={() => this.deleteBill(bill.id)}
                                                className="btn btn-outline-danger">Delete
                                        </button>
                                        <button style={{marginLeft: "10px"}} onClick={() => this.downloadBill(bill.id)}
                                                className="btn btn-outline-primary">View/Download
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
