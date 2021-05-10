import React, {Component} from 'react';
import ItemService from "../../services/ItemService";

class ViewItemComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: this.props.match.params.id,
            item: {},
            supplierName: ''
        }
    }

    componentDidMount() {
        //then refers with a JS Promise
        ItemService.getItem(this.state.id).then((res) => {
                let item = res.data;
                this.setState({
                    name: item.name,
                    itemCode: item.itemCode,
                    supplier: item.supplier,
                    amountRemaining: item.amountRemaining,
                    unitPrice: item.unitPrice,
                });
                console.log(item.suppliersById);

                ItemService.getItemSupplier(res.data.supplier).then((response) => {
                    this.setState({supplierName: response.data});

                })
            }
        );
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
                        <h3 className="text-center">View Item</h3>
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
                                           value={this.state.itemCode} readOnly={true}/>
                                </div>
                                <div className="form-group">
                                    <label>Supplier</label>
                                    <input type="text" placeholder="Amount Remaining" name="amountRemaining"
                                           className="form-control"
                                           value={this.state.supplierName} readOnly={true}/>
                                </div>
                                <div className="form-group">
                                    <label>Amount Remaining </label>
                                    <input type="text" placeholder="Amount Remaining" name="amountRemaining"
                                           className="form-control"
                                           value={this.state.amountRemaining} readOnly={true}/>
                                </div>
                                <div className="form-group">
                                    <label>Unit Price</label>
                                    <input type="text" placeholder="Unit Price" name="unitPrice"
                                           className="form-control"
                                           value={this.state.unitPrice} readOnly={true}/>
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

export default ViewItemComponent;
