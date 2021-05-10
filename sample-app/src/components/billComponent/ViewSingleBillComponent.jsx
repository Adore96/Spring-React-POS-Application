import React, {Component} from 'react';
import BillService from "../../services/BillService";

class ViewSingleBillComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: this.props.match.params.id,
            bill: {},
        }
    }

    componentDidMount() {
        //then refers with a JS Promise
        BillService.getBill(this.state.id).then((res) => {
                let bill = res.data;
                this.setState({
                    useridfk: bill.useridfk,
                    itemsDescription: bill.itemsDescription,
                    billAmount: bill.billAmount,
                    payment: bill.payment,
                    paymentMethod: bill.paymentMethod,
                    createdTime: bill.createdTime,
                })

                // use this to get username from the useridfk
                // ItemService.getItemSupplier(res.data.supplier).then((response) => {
                //     this.setState({supplierName: response.data})
                // })
            }
        );
    }

    render() {
        const spaceBottom = {
            paddingBottom: "50px",
            paddingTop: "25px"
        };
        return (
            <div className="container" style={spaceBottom}>
                <div className="row">
                    <div className="card col-md-6 offset-md-3">
                        <h3 className="text-center">View Bill</h3>
                        <div className="card-body">
                            <form action="signup">
                                <div className="form-group">
                                    <label>User Name </label>
                                    <input type="text" placeholder="Item Name" name="name"
                                           className="form-control"
                                           value={this.state.useridfk}
                                           readOnly={true}/>
                                </div>
                                <div className="form-group">
                                    <label>Item Description</label>
                                    <input type="text" placeholder="Item Code" name="itemCode"
                                           className="form-control"
                                           value={this.state.itemsDescription} readOnly={true}/>
                                </div>
                                <div className="form-group">
                                    <label>Supplier</label>
                                    <input type="text" placeholder="Amount Remaining" name="amountRemaining"
                                           className="form-control"
                                           value={this.state.billAmount} readOnly={true}/>
                                </div>
                                <div className="form-group">
                                    <label>Amount Remaining </label>
                                    <input type="text" placeholder="Amount Remaining" name="amountRemaining"
                                           className="form-control"
                                           value={this.state.payment} readOnly={true}/>
                                </div>
                                <div className="form-group">
                                    <label>Unit Price</label>
                                    <input type="text" placeholder="Unit Price" name="unitPrice"
                                           className="form-control"
                                           value={this.state.paymentMethod} readOnly={true}/>
                                </div>
                                <div className="form-group">
                                    <label>Unit Price</label>
                                    <input type="text" placeholder="Unit Price" name="unitPrice"
                                           className="form-control"
                                           value={this.state.createdTime} readOnly={true}/>
                                </div>

                                <button className="Btn btn-danger " onClick={this.cancel.bind(this)}
                                        style={{marginLeft: "10px"}}>Download Bill
                                </button>
                                <button className="Btn btn-danger " onClick={this.cancel.bind(this)}
                                        style={{marginLeft: "10px"}}>Cancel
                                </button>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ViewSingleBillComponent;
