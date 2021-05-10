import React, {Component} from 'react';
import ItemService from "../../services/ItemService";
import BillService from "../../services/BillService";

class UpdateBillComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: this.props.match.params.id,
            useridfk: '',
            billAmount: '',
            createdtime: '',
            payment: '',
            paymentmethod: ''
        }
    }

    componentDidMount() {
        //then refers with a JS Promise
        BillService.getBill(this.state.id).then((res) => {
                let bill = res.data;
                this.setState({
                    id: this.state.id,
                    useridfk: bill.useridfk,
                    billAmount: bill.billAmount,
                    createdtime: bill.createdtime,
                    payment: bill.payment,
                    paymentMethod: bill.paymentMethod,
                })
                this.setSupplierName(res);
            }
        );
    }

    setSupplierName(res) {
        ItemService.getItemSupplier(res.data.supplier).then((response) => {
            this.setState({supplierName: response.data})
        })
    }

    updateBill = (event) => {
        event.preventDefault();
        let bill = {
            id: this.state.id,
            useridfk: this.state.useridfk,
            billAmount: this.state.billAmount,
            payment: this.state.payment,
            paymentMethod: this.state.paymentMethod
        };
        console.log('Bill => ' + JSON.stringify(bill));

        BillService.updateBill(bill, this.state.id).then(res => {
            this.props.history.push('/bills');
        });
    }

    changeBillAmountHandler = (event) => {
        this.setState({billAmount: event.target.value});
    }
    changePaymentHandler = (event) => {
        this.setState({payment: event.target.value});
    }
    changePaymentMethodHandler = (event) => {
        this.setState({paymentMethod: event.target.value});
    }

    cancel() {
        this.props.history.push('/bills');
    }

    render() {
        const LowerBound = {
            paddingBottom: "70px",
            paddingTop: "20px"
        };
        return (
            <div className="container" style={LowerBound}>
                <div className="row">
                    <div className="card col-md-6 offset-md-3">
                        <h3 className="text-center">Update Bill</h3>
                        <div className="card-body">
                            <form action="signup">
                                <div className="form-group">
                                    <label>Invoice Number</label>
                                    <input type="text" placeholder="Invoice Number" name="id"
                                           className="form-control"
                                           value={this.state.id} readOnly={true}/>
                                </div>
                                <div className="form-group">
                                    <label>User </label>
                                    <input type="text" placeholder="Item Code" name="itemcode"
                                           className="form-control"
                                           value={this.state.useridfk} readOnly={true}/>
                                </div>
                                <div className="form-group">
                                    <label>Bill Amount </label>
                                    <input type="text" placeholder="Supplier" name="supplier"
                                           className="form-control"
                                           value={this.state.billAmount} onChange={this.changeBillAmountHandler}/>
                                </div>
                                <div className="form-group">
                                    <label>Payment </label>
                                    <input type="text" placeholder="Amount Remaining" name="amountremaining"
                                           className="form-control"
                                           value={this.state.payment}
                                           onChange={this.changePaymentHandler}/>
                                </div>
                                <div className="form-group">
                                    <label>Payment Method </label>
                                    <input type="text" placeholder="Unit Price" name="unitprice"
                                           className="form-control"
                                           value={this.state.paymentMethod} onChange={this.changePaymentMethodHandler}/>
                                </div>
                                <button className="Btn btn-success" onClick={this.updateBill}>Update</button>
                                <button className="Btn btn-danger" onClick={this.cancel.bind(this)}
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


export default UpdateBillComponent;
