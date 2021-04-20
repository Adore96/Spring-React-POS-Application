import React, {Component} from 'react';
import UserService from "../services/UserService";
import userService from "../services/UserService";

class StocksListComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            stocks: []
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

    componentDidMount() {
        //then refers with a JS Promise
        StockService.getStocks().then((response) => {
            this.setState({stocks: response.data})
        });
    }

    render() {
        return (
            <div>
                <h1 className="text-center">Stocks List</h1>
                <table className="table table-striped">

                    <thead>
                    <tr>
                        <th>Item Code</th>
                        <th>Name</th>
                        <th>Amount Remaining</th>
                        <th>Supplier</th>
                        <th>Actions</th>
                    </tr>
                    </thead>

                    <tbody>
                    {
                        this.state.stocks.map(
                            stock =>
                                <tr key={stock.id}>
                                    <td>{stock.username}</td>
                                    <td>{stock.email}</td>
                                    <td>{stock.telephone}</td>
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

export default StocksListComponent;
