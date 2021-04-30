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
                    <div className="col-sm-5"></div>
                    <div className="col-sm-6">
                        <h1 className="text-left" style={{marginTop: "10px"}}>Bill List</h1>
                    </div>
                    <div className="col-sm-1">

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
                                    <td>{bill.userid_fk}</td>
                                    <td>{bill.billamount}</td>
                                    <td>{bill.payment}</td>
                                    <td>{bill.paymentmethod}</td>
                                    <td>{bill.createdtime}</td>

                                    <td>
                                        <button onClick={() => this.updateBill(bill.id)}
                                                className="btn btn-outline-info">Update
                                        </button>
                                        <button style={{marginLeft: "10px"}} onClick={() => this.deleteBill(bill.id)}
                                                className="btn btn-outline-danger">Delete
                                        </button>
                                        <button style={{marginLeft: "10px"}} onClick={() => this.downloadBill(bill.id)}
                                                className="btn btn-outline-primary">Download
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
