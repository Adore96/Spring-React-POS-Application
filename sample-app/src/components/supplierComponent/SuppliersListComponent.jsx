import React, {Component} from 'react';
import SupplierService from "../../services/SupplierService";

class SuppliersListComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            suppliers: []
        }
    }

    updateSupplier = (id) => {
        this.props.history.push(`/update-supplier/${id}`);
    }

    deleteSupplier = (id) => {
        SupplierService.deleteSupplier(id).then(res => {
            this.setState({suppliers: this.state.suppliers.filter(supplier => supplier.id !== id)});
        })
    }

    viewSupplier = (id) => {
        this.props.history.push(`/view-supplier/${id}`);
    }

    addSupplier = () => {
        this.props.history.push('/add-supplier');
    }

    componentDidMount() {
        //then refers with a JS Promise
        SupplierService.getSuppliers().then((response) => {
            this.setState({suppliers: response.data})
        });
    }

    render() {
        return (
            <div>

                <div className="row">
                    <div className="col-sm-4"></div>
                    <div className="col-sm-6">
                        <h1 className="text-left" style={{marginTop: "10px"}}>Supplier List</h1>
                    </div>
                    <div className="col-sm-2">
                        <button style={{marginTop: "25px"}}
                                onClick={() => this.addSupplier()}
                                className="btn btn-primary">Add Supplier
                        </button>
                    </div>
                </div>
                <br/>

                <table className="table table-striped">

                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Telephone</th>
                        <th>Item 01</th>
                        <th>Item 02</th>
                        <th>Item 03</th>
                        <th>Actions</th>
                    </tr>
                    </thead>

                    <tbody>
                    {
                        this.state.suppliers.map(
                            supplier =>
                                <tr key={supplier.id}>
                                    <td>{supplier.name}</td>
                                    <td>{supplier.telephone}</td>
                                    <td>{supplier.item1}</td>
                                    <td>{supplier.item2}</td>
                                    <td>{supplier.item3}</td>
                                    <td>
                                        <button onClick={() => this.updateSupplier(supplier.id)}
                                                className="btn btn-outline-info">Update
                                        </button>
                                        <button style={{marginLeft: "10px"}}
                                                onClick={() => this.deleteSupplier(supplier.id)}
                                                className="btn btn-outline-danger">Delete
                                        </button>
                                        <button style={{marginLeft: "10px"}}
                                                onClick={() => this.viewSupplier(supplier.id)}
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

export default SuppliersListComponent;
