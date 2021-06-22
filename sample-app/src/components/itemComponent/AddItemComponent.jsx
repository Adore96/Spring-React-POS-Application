import React, {Component} from 'react';
import ItemService from "../../services/ItemService";
import SupplierService from "../../services/SupplierService";
import CommonService from "../../services/CommonService";

class AddItemComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            itemCode: '',
            suppliers: [],
            amountRemaining: '',
            unitPrice: '',
            selectedOption: '',
            supplier: ''
        }
    }

    saveItem = (event) => {
        event.preventDefault();
        let item = {
            name: this.state.name,
            itemCode: this.state.itemCode,
            supplier: this.state.supplier,
            amountRemaining: this.state.amountRemaining,
            unitPrice: this.state.unitPrice
        };
        console.log('Item => ' + JSON.stringify(item));

        ItemService.addItem(item).then(res => {
            this.props.history.push('/items');
        });
    }

    componentDidMount() {
        //then refers with a JS Promise
        CommonService.getAllSuppliers().then((res) => {
                this.setState({
                    suppliers: res.data
                })
            }
        );
    }

    renderList() {
        return (this.state.suppliers.map(data => ({label: data.name, value: data.id})))
    }

    changeNameHandler = (event) => {
        this.setState({name: event.target.value});
    }
    changeItemCodeHandler = (event) => {
        this.setState({itemcode: event.target.value});
    }
    changeSupplierHandler = (event) => {
        this.setState({supplier: event.target.value});
        console.log(this.state.supplier);
    }
    changeAmountremainingHandler = (event) => {
        this.setState({amountremaining: event.target.value});
    }
    changeUnitPriceHandler = (event) => {
        this.setState({unitprice: event.target.value});
    }

    cancel() {
        this.props.history.push('/items');
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
                        <h3 className="text-center">Add Item Page</h3>
                        <div className="card-body">
                            <form action="signup">
                                <div className="form-group">
                                    <label>Item Name </label>
                                    <input type="text" placeholder="Item Name" name="name"
                                           className="form-control"
                                           value={this.state.name} onChange={this.changeNameHandler}/>
                                </div>
                                <div className="form-group">
                                    <label>Item Code </label>
                                    <input type="text" placeholder="Item Code" name="itemcode"
                                           className="form-control"
                                           value={this.state.itemcode} onChange={this.changeItemCodeHandler}/>
                                </div>
                                <div className="form-group">
                                    <label>Supplier</label><br/>
                                    {/*<Select  onChange={this.changeSupplierHandler}*/}
                                    {/*    options={this.renderList()}*/}
                                    {/* />*/}

                                    <select value={this.state.supplier} onChange={this.changeSupplierHandler}>
                                        {this.state.suppliers.map((data) => (
                                            <option value={data.id}>{data.name}</option>
                                        ))}
                                    </select>

                                </div>
                                <div className="form-group">
                                    <label>Amount Remaining </label>
                                    <input type="text" placeholder="Amount Remaining" name="amountremaining"
                                           className="form-control"
                                           value={this.state.amountremaining}
                                           onChange={this.changeAmountremainingHandler}/>
                                </div>
                                <div className="form-group">
                                    <label>Unit Price </label>
                                    <input type="text" placeholder="Unit Price" name="unitprice"
                                           className="form-control"
                                           value={this.state.unitprice} onChange={this.changeUnitPriceHandler}/>
                                </div>
                                <button className="Btn btn-success" onClick={this.saveItem}>Save</button>
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

export default AddItemComponent;
