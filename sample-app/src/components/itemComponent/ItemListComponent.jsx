import React, {Component} from 'react';
import StockService from "../../services/StockService";

class ItemListComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            stocks: [],
            supplierName: ''
        }
    }

    updateStock = (id) => {
        this.props.history.push(`/update-stock/${id}`);
    }

    deleteStock = (id) => {
        StockService.deleteStock(id).then(res => {
            this.setState({stocks: this.state.stocks.filter(stock => stock.id !== id)});
        })
    }

    viewStock = (id) => {
        this.props.history.push(`/view-stock/${id}`);
    }

    addStock = () => {
        this.props.history.push('/add-stock');
    }

    componentDidMount() {
        //then refers with a JS Promise
        StockService.getStocks().then((response) => {
            this.setState({
                stocks: response.data
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
                                onClick={() => this.addStock()}
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
                        this.state.stocks.map(
                            stock =>
                                <tr key={stock.id}>
                                    <td>{stock.itemcode}</td>
                                    <td>{stock.name}</td>
                                    <td>{stock.amountremaining}</td>
                                    <td>{stock.unitprice}</td>
                                    <td>{stock.supplier}</td>
                                    <td>
                                        <button onClick={() => this.updateStock(stock.id)}
                                                className="btn btn-outline-info">Update
                                        </button>
                                        <button style={{marginLeft: "10px"}} onClick={() => this.deleteStock(stock.id)}
                                                className="btn btn-outline-danger">Delete
                                        </button>
                                        <button style={{marginLeft: "10px"}} onClick={() => this.viewStock(stock.id)}
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
