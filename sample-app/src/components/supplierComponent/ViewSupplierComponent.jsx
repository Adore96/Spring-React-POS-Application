import React, {Component} from 'react';
import SupplierService from "../../services/SupplierService";

class ViewSupplierComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: this.props.match.params.id,
            supplier: {},
            supplierName: ''
        }
    }

    componentDidMount() {
        //then refers with a JS Promise
        SupplierService.getSupplier(this.state.id).then((res) => {
                let supplier = res.data;
                this.setState({
                    id: supplier.id,
                    name: supplier.name,
                    telephone: supplier.telephone,
                    item1: supplier.item1,
                    item2: supplier.item2,
                    item3: supplier.item3,
                })
            }
        );
    }

    cancel() {
        this.props.history.push('/suppliers');
    }

    render() {

        const spaceBottom = {
            paddingBottom: "50px"
        };
        return (
            <div className="container" style={spaceBottom}>
                <div className="row">
                    <div className="card col-md-6 offset-md-3">
                        <h3 className="text-center">View Supplier</h3>
                        <div className="card-body">
                            <form action="signup">
                                <div className="form-group">
                                    <label>ID </label>
                                    <input type="text" placeholder="ID" name="id"
                                           className="form-control"
                                           value={this.state.id}
                                           readOnly={true}/>
                                </div>
                                <div className="form-group">
                                    <label>Supplier Name </label>
                                    <input type="text" placeholder="Supplier Name" name="name"
                                           className="form-control"
                                           value={this.state.name}
                                           readOnly={true}/>
                                </div>
                                <div className="form-group">
                                    <label>Telephone</label>
                                    <input type="text" placeholder="Telephone" name="telephone"
                                           className="form-control"
                                           value={this.state.telephone} readOnly={true}/>
                                </div>
                                <div className="form-group">
                                    <label>Item 01</label>
                                    <input type="text" placeholder="Amount Remaining" name="amountRemaining"
                                           className="form-control"
                                           value={this.state.item1} readOnly={true}/>
                                </div>
                                <div className="form-group">
                                    <label>Item 02 </label>
                                    <input type="text" placeholder="Amount Remaining" name="amountRemaining"
                                           className="form-control"
                                           value={this.state.item2} readOnly={true}/>
                                </div>
                                <div className="form-group">
                                    <label>Item 03</label>
                                    <input type="text" placeholder="Unit Price" name="unitPrice"
                                           className="form-control"
                                           value={this.state.item3} readOnly={true}/>
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

export default ViewSupplierComponent;
