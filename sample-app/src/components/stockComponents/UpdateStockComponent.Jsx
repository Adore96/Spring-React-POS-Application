import React, {Component} from 'react';
import StockService from "../../services/StockService";

class UpdateStockComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: this.props.match.params.id,
            name: '',
            itemcode: '',
            supplier: '',
            amountremaining: '',
            unitprice: ''
        }
    }

    componentDidMount() {
        console.log(this.state.id);
        //then refers with a JS Promise
        StockService.getStock(this.state.id).then((res) => {
                let stock = res.data;
                this.setState({
                    name: stock.name,
                    itemcode: stock.itemcode,
                    supplier: stock.supplier,
                    amountremaining: stock.amountremaining,
                    unitprice: stock.unitprice,
                })
            }
        );
    }

    updateStock = (event) => {
        event.preventDefault();
        let stock = {
            name: this.state.name,
            itemcode: this.state.itemcode,
            supplier: this.state.supplier,
            amountremaining: this.state.amountremaining,
            unitprice: this.state.unitprice
        };
        console.log('Stock => ' + JSON.stringify(stock));

        StockService.updateStock(stock, this.state.id).then(res => {
            this.props.history.push('/stocks');
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
        this.props.history.push('/stocks');
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="card col-md-6 offset-md-3">
                        <h3 className="text-center">Stock Update Page</h3>
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
                                           value={this.state.supplier} onChange={this.changeSupplierHandler}/>
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
                                <button className="Btn btn-success" onClick={this.updateStock}>Update</button>
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

export default UpdateStockComponent;
