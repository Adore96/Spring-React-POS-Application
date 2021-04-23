import React, {Component} from 'react';
import StockService from "../../services/StockService";

class ViewStockComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: this.props.match.params.id,
            stock: {}
        }
    }

    componentDidMount() {
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

    cancel() {
        this.props.history.push('/stocks');
    }

    render() {
        return (

            <div className="container" >
                <div className="row">
                    <div className="card col-md-6 offset-md-3">
                        <h3 className="text-center">Stock View Page</h3>
                        <div className="card-body">
                            <form action="signup">
                                <div className="form-group">
                                    <label>Item Name </label>
                                    <input type="text" placeholder="Item Name" name="name"
                                           className="form-control"
                                           value={this.state.name}
                                           readOnly={true}/>
                                </div>
                                <div className="form-group">
                                    <label>Item Code</label>
                                    <input type="text" placeholder="Item Code" name="itemCode"
                                           className="form-control"
                                           value={this.state.itemcode}/>
                                </div>
                                <div className="form-group">
                                    <label>Supplier</label>
                                    <input type="text" placeholder="Amount Remaining" name="amountRemaining"
                                           className="form-control"
                                           value={this.state.supplier}/>
                                </div>
                                <div className="form-group">
                                    <label>Amount Remaining </label>
                                    <input type="text" placeholder="Amount Remaining" name="amountRemaining"
                                           className="form-control"
                                           value={this.state.amountremaining}/>
                                </div>
                                <div className="form-group">
                                    <label>Unit Price</label>
                                    <input type="text" placeholder="Unit Price" name="unitPrice"
                                           className="form-control"
                                           value={this.state.unitprice}/>
                                </div>
                                {/*should insert a dropdown containing the list of suppliers TODO*/}

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

export default ViewStockComponent;
