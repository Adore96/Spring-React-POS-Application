import React, {Component} from 'react';
import ItemService from "../../services/ItemService";

class ItemListComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [],
            supplierName: ''
        }
    }

    updateItem = (id) => {
        this.props.history.push(`/update-item/${id}`);
    }

    deleteItem = (id) => {
        ItemService.deleteItem(id).then(res => {
            this.setState({items: this.state.items.filter(item => item.id !== id)});
        })
    }

    viewItem = (id) => {
        this.props.history.push(`/view-item/${id}`);
    }

    addItem = () => {
        this.props.history.push('/add-item');
    }

    componentDidMount() {
        //then refers with a JS Promise
        ItemService.getItems().then((response) => {
            this.setState({
                items: response.data
            })
        });
    }

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-sm-4"></div>
                    <div className="col-sm-6">
                        <h1 className="text-left" style={{marginTop: "10px"}}>Item List</h1>
                    </div>
                    <div className="col-sm-2">
                        <button style={{marginTop: "25px"}}
                                onClick={() => this.addItem()}
                                className="btn btn-primary">Add Item
                        </button>
                    </div>
                </div>
                <br/>
                <table className="table table-striped">

                    <thead>
                    <tr>
                        <th>Item Code</th>
                        <th>Name</th>
                        <th>Amount Remaining/KG</th>
                        <th>Unit Price/LKR</th>
                        <th>Supplier</th>
                        <th>Actions</th>
                    </tr>
                    </thead>

                    <tbody>
                    {
                        this.state.items.map(
                            item =>
                                <tr key={item.id}>
                                    <td>{item.itemcode}</td>
                                    <td>{item.name}</td>
                                    <td>{item.amountremaining}</td>
                                    <td>{item.unitprice}</td>
                                    <td>{item.supplier}</td>
                                    <td>
                                        <button onClick={() => this.updateItem(item.id)}
                                                className="btn btn-outline-info">Update
                                        </button>
                                        <button style={{marginLeft: "10px"}} onClick={() => this.deleteItem(item.id)}
                                                className="btn btn-outline-danger">Delete
                                        </button>
                                        <button style={{marginLeft: "10px"}} onClick={() => this.viewItem(item.id)}
                                                className="btn btn-outline-success">View Details
                                        </button>
                                    </td>
                                </tr>
                        )
                    }
                    </tbody>
                </table>
            </div>
        );
    }
}

export default ItemListComponent;
