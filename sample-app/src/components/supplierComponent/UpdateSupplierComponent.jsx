import React, {Component} from 'react';
import SupplierService from "../../services/SupplierService";

class UpdateSupplierComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: this.props.match.params.id,
            name: '',
            telephone: '',
            item1: '',
            item2: '',
            item3: ''
        }
    }

    componentDidMount() {
        //then refers with a JS Promise
        SupplierService.getSupplier(this.state.id).then((res) => {
                let supplier = res.data;
                this.setState({
                    name: supplier.name,
                    telephone: supplier.telephone,
                    item1: supplier.item1,
                    item2: supplier.item2,
                    item3: supplier.item3
                })
            }
        );
    }

    updateSupplier = (event) => {
        event.preventDefault();
        let supplier = {
            name: this.state.name,
            telephone: this.state.telephone,
            item1: this.state.item1,
            item2: this.state.item2,
            item3: this.state.item3
        };
        console.log('Supplier => ' + JSON.stringify(supplier));

        SupplierService.updateSupplier(supplier, this.state.id).then(res => {
            this.props.history.push('/suppliers');
        });
    }

    changeNamehandler = (event) => {
        this.setState({name: event.target.value});
    }
    changeTelephonehandler = (event) => {
        this.setState({telephone: event.target.value});
    }
    changeItem1handler = (event) => {
        this.setState({item1: event.target.value});
    }
    changeItem2handler = (event) => {
        this.setState({item2: event.target.value});
    }
    changeItem3handler = (event) => {
        this.setState({item3: event.target.value});
    }

    cancel() {
        this.props.history.push('/suppliers');
    }

    render() {
        const LowerBound = {
            paddingBottom: "70px",
            paddingTop: "20px"
        };
        return (
            <div className="container" style={LowerBound}>
                <div className="row">
                    <div className="card col-md-6 offset-md-3">
                        <h3 className="text-center">Supplier Update Page</h3>
                        <div className="card-body">
                            <form action="signup">
                                <div className="form-group">
                                    <label>User Name </label>
                                    <input type="text" placeholder="User Name" name="name"
                                           className="form-control"
                                           value={this.state.name} onChange={this.changeNamehandler}/>
                                </div>
                                <div className="form-group">
                                    <label>Telephone </label>
                                    <input type="text" placeholder="Telephone Number" name="telephone"
                                           className="form-control"
                                           value={this.state.telephone} onChange={this.changeTelephonehandler}/>
                                </div>
                                <div className="form-group">
                                    <label>Item 01 </label>
                                    <input type="text" placeholder="Item 01" name="item1"
                                           className="form-control"
                                           value={this.state.item1} onChange={this.changeItem1handler}/>
                                </div>
                                <div className="form-group">
                                    <label>Item 02 </label>
                                    <input type="text" placeholder="Item 02" name="item2"
                                           className="form-control"
                                           value={this.state.item2} onChange={this.changeItem2handler}/>
                                </div>
                                <div className="form-group">
                                    <label>Item 03 </label>
                                    <input type="text" placeholder="Item 03" name="item3"
                                           className="form-control"
                                           value={this.state.item3} onChange={this.changeItem3handler}/>
                                </div>
                                <button className="Btn btn-success" onClick={this.updateSupplier}>Update</button>
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

export default UpdateSupplierComponent;
