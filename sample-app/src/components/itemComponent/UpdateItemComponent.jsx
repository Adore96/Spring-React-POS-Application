import React, {Component} from 'react';
import ItemService from "../../services/ItemService";

class UpdateItemComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: this.props.match.params.id,
            name: '',
            itemCode: '',
            supplier: '',
            amountRemaining: '',
            unitPrice: '',
            supplierName: '',
            suppliersById:[]
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
                    suppliersById:item.suppliersById,
                })
                this.setSupplierName(res);
            }
        );
    }

    setSupplierName(res) {
        console.log(res.data.suppliers);
        ItemService.getItemSupplier(res.data.supplier).then((response) => {
            this.setState({supplierName: response.data})
        })
    }

// <select value={this.state.supplier} onChange={this.changeSupplierHandler}>
// {this.state.suppliers.map((data) => (
//     <option value={data.id}>{data.name}</option>
// ))}
// </select>

    updateItem = (event) => {
        event.preventDefault();
        let item = {
            name: this.state.name,
            itemCode: this.state.itemCode,
            supplier: this.state.supplier,
            amountRemaining: this.state.amountRemaining,
            unitPrice: this.state.unitPrice
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
        this.setState({itemCode: event.target.value});
    }
    changeSupplierHandler = (event) => {
        this.setState({supplier: event.target.value});
    }
    changeAmountremainingHandler = (event) => {
        this.setState({amountRemaining: event.target.value});
    }
    changeUnitPriceHandler = (event) => {
        this.setState({unitPrice: event.target.value});
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
                                    <input type="text" placeholder="Item Code" name="itemCode"
                                           className="form-control"
                                           value={this.state.itemCode} onChange={this.changeItemCodeHandler}/>
                                </div>

                                <div className="form-group">
                                    <label style={{marginRight: "12px"}}>Supplier </label>
                                    <select value={this.state.supplier} aria-readonly={"true"}>
                                        {this.state.suppliersById.map((data) => (
                                            <option value={data.id}>{data.name}</option>
                                        ))}
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label>Amount Remaining </label>
                                    <input type="text" placeholder="Amount Remaining" name="amountRemaining"
                                           className="form-control"
                                           value={this.state.amountRemaining}
                                           onChange={this.changeAmountremainingHandler}/>
                                </div>
                                <div className="form-group">
                                    <label>Unit Price / LKR </label>
                                    <input type="text" placeholder="Unit Price/LKR" name="unitprice"
                                           className="form-control"
                                           value={this.state.unitPrice} onChange={this.changeUnitPriceHandler}/>
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
