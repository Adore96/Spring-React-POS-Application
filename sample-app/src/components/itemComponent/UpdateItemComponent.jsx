import React, {Component} from 'react';
import ItemService from "../../services/ItemService";

class UpdateItemComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: this.props.match.params.id,
            name: '',
            itemcode: '',
            supplier: '',
            amountremaining: '',
            unitprice: '',
            supplierName: ''
        }
    }

    componentDidMount() {
        //then refers with a JS Promise
        ItemService.getItem(this.state.id).then((res) => {
                let item = res.data;
                this.setState({
                    name: item.name,
                    itemcode: item.itemcode,
                    supplier: item.supplier,
                    amountremaining: item.amountremaining,
                    unitprice: item.unitprice,
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

    updateItem = (event) => {
        event.preventDefault();
        let item = {
            name: this.state.name,
            itemcode: this.state.itemcode,
            supplier: this.state.supplier,
            amountremaining: this.state.amountremaining,
            unitprice: this.state.unitprice
        };
        console.log('Item => ' + JSON.stringify(item));

        ItemService.updateItem(item, this.state.id).then(res => {
            this.props.history.push('/items');
        });
    }

    changeNameHandler = (event) => {
        this.setState({name: event.target.value});
    }
    changeItemCodeHandler = (event) => {
        this.setState({itemcode: event.target.value});
    }
    changeSupplierHandler = (event) => {
        this.setState({supplier: event.target.value});
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
        const LowerBound = {
            paddingBottom: "70px"
        };

        return (
            <div className="container" style={LowerBound}>
                <div className="row">
                    <div className="card col-md-6 offset-md-3">
                        <h3 className="text-center">Update Item Page</h3>
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
                                    <label>Supplier </label>
                                    <input type="text" placeholder="Supplier" name="supplier"
                                           className="form-control"
                                           value={this.state.supplierName} onChange={this.changeSupplierHandler}/>
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
                                <button className="Btn btn-success" onClick={this.updateItem}>Update</button>
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

export default UpdateItemComponent;
