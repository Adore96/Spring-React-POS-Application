import React, {Component} from 'react';
import StockService from "../../services/StockService";

class MyComponent extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            id: this.props.match.params.id,
            stock: {}
        }
    }

    componentDidMount() {
        StockService.getStock(this.state.id).then(response => {
            this.setState({stock: response.data});
        })
    }

    cancel() {
        this.props.history.push('/stocks');
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="card col-md-6 offset-md-3">
                        <h3 className="text-center">Stock View Page</h3>
                        <div className="card-body">
                            <form action="signup">
                                <div className="form-group">
                                    <label>Item Name </label>
                                    <input type="text" placeholder="Item Name" name="name"
                                           className="form-control"
                                           value={this.state.stock.name}
                                           readOnly={true}/>
                                </div>
                                <div className="form-group">
                                    <label>Item Code</label>
                                    <input type="text" placeholder="Item Code" name="itemCode"
                                           className="form-control"
                                           value={this.state.stock.itemCode}/>
                                </div>
                                <div className="form-group">
                                    <label>Amount Remaining </label>
                                    <input type="text" placeholder="Amount Remaining" name="amountRemaining"
                                           className="form-control"
                                           value={this.state.user.amountRemaining}/>
                                </div>
                                <div className="form-group">
                                    <label>Unit Price</label>
                                    <input type="text" placeholder="Unit Price" name="unitPrice"
                                           className="form-control"
                                           value={this.state.user.unitPrice}/>
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

MyComponent.propTypes = {};

export default MyComponent;
