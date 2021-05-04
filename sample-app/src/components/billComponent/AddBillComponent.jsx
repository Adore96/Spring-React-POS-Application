import React, {Component} from 'react';
import CommonService from "../../services/CommonService";

class AddBillComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            useridname: '',
            billamount: '',
            payment: '',
            paymentmethod: '',
            bills: [],
            items: [],
            Stringitems: '',
            item1: '',
            item2: '',
            item3: '',
            item4: '',
            bill: '',
            users: [],
        }
    }

    componentDidMount() {
        //then refers with a JS Promise
        CommonService.getAllItems().then((response) => {
            this.setState({items: response.data})
        });
        CommonService.getAllUsers().then((response) => {
            this.setState({users: response.data})
        });
    }

    saveBill = (event) => {
        event.preventDefault();
        this.StringifyItems(this.state.item1, this.state.item2, this.state.item3, this.state.item4);
        console.log(this.state.Stringitems);
        let bill = {
            useridname: this.state.useridname,
            billamount: this.state.billamount,
            payment: this.state.createdtime,
            paymentmethod: this.state.createdtime,
            itemss: this.state.Stringitems,
        };
        console.log(JSON.stringify(bill));

        // BillService.addBill(bill).then(res => {
        //     this.props.history.push('/bills');
        // });
    }

    StringifyItems = (item1, item2, item3, item4) => {
        this.setState({Stringitems: "" + item1 + "," + item2 + "," + item3 + "," + item4});
    }

    changeUseridnameHandler = (event) => {
        this.setState({useridname: event.target.value});
    }
    changeBillamountHandler = (event) => {
        this.setState({billamount: event.target.value});
    }
    changePaymentHandler = (event) => {
        this.setState({payment: event.target.value});
    }
    changePaymentmethodHandler = (event) => {
        console.log(event.target.value);
        this.setState({paymentmethod: event.target.value});
    }
    changeItem1Handler = (event) => {
        this.setState({item1: event.target.value});
        console.log(event.target.value);
    }
    changeItem2Handler = (event) => {
        this.setState({item2: event.target.value});
    }
    changeItem3Handler = (event) => {
        this.setState({item3: event.target.value});
    }
    changeItem4Handler = (event) => {
        this.setState({item4: event.target.value});
    }

    cancel() {
        this.props.history.push('/bills');
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
                        <h3 className="text-center">New Bill Page</h3>
                        <div className="card-body">
                            <form action="signup">
                                <div className="form-group">
                                    <label style={{marginRight: "10px"}}>User Name </label>
                                    <select value={this.state.useridname} onChange={this.changeUseridnameHandler}>
                                        <option value={" "}>Select a user</option>
                                        {this.state.users.map((data) => (
                                            <option value={data.id}>{data.username}</option>
                                        ))}
                                        <option value={"other"}>Other</option>
                                    </select>
                                </div>

                                <div className="form-group">
                                    <label>Items</label><br/>
                                    <select value={this.state.item1} onChange={this.changeItem1Handler}>
                                        <option value={" "}>Select Item 1</option>
                                        {this.state.items.map((data) => (
                                            <option value={data.name}>{data.name}</option>
                                        ))}
                                    </select>
                                    <select value={this.state.item2} onChange={this.changeItem2Handler}
                                            style={{marginLeft: "10px"}}>
                                        <option value={" "}>Select Item 2</option>
                                        {this.state.items.map((data) => (
                                            <option value={data.id}>{data.name}</option>
                                        ))}
                                    </select>
                                    <select value={this.state.item3} onChange={this.changeItem3Handler}
                                            style={{marginLeft: "10px"}}>
                                        <option value={" "}>Select Item 3</option>
                                        {this.state.items.map((data) => (
                                            <option value={data.id}>{data.name}</option>
                                        ))}
                                    </select>
                                    <select value={this.state.item4} onChange={this.changeItem4Handler}
                                            style={{marginLeft: "10px"}}>
                                        <option value={" "}>Select Item 4</option>
                                        {this.state.items.map((data) => (
                                            <option value={data.id}>{data.name}</option>
                                        ))}
                                    </select>
                                </div>

                                <div className="form-group">
                                    <label>Bill Amount </label>
                                    <input type="text" placeholder="BillAmount/LKR" name="billamount"
                                           className="form-control"
                                           value={this.state.billamount} onChange={this.changeBillamountHandler}/>
                                </div>
                                <div className="form-group">
                                    <label>Payment </label>
                                    <input type="text" placeholder="Payment/LKR" name="Payment"
                                           className="form-control"
                                           value={this.state.payment} onChange={this.changePaymentHandler}/>
                                </div>
                                <div className="form-group">
                                    <label>Payment Method </label>
                                    <select value={this.state.paymentmethod} onChange={this.changePaymentmethodHandler}
                                            style={{marginLeft: "10px"}}>
                                        <option value={""}>Select Method</option>
                                        <option value={"creditcard"}>Credit Card</option>
                                        <option value={"debitcard"}>Debit Card</option>
                                        <option value={"cash"}>Cash</option>
                                        ))}
                                    </select>
                                </div>

                                <button className="Btn btn-success" onClick={this.saveBill}>Save</button>
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

export default AddBillComponent;
