import React, {Component} from 'react';
import SupplierService from "../../services/SupplierService";
import CommonService from "../../services/CommonService";

class AddSupplierComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            telephone: '',
            item1: '',
            item2: '',
            item3: '',
            items: [],
            itemByItemidFk: ''
        }
    }

    componentDidMount() {
        //then refers with a JS Promise
        CommonService.getAllItems().then((response) => {
            this.setState({items: response.data})
        });
    }

    saveSupplier = (event) => {
        event.preventDefault();
        let supplier = {
            name: this.state.name,
            telephone: this.state.telephone,
            item1: this.state.item1,
            item2: this.state.item2,
            item3: this.state.item3,
            itemByItemidFk: this.state.itemByItemidFk,
        };
        console.log('Supplier => ' + JSON.stringify(supplier));

        SupplierService.addSupplier(supplier).then(res => {
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
    changeItemsHandler = (event) => {
        this.setState({itemByItemidFk: event.target.value});
        console.log(this.state.itemByItemidFk);
    }

    handleChange(field, e) {
        let fields = this.state.fields;
        fields[field] = e.target.value;
        this.setState({fields});
    }

    cancel() {
        this.props.history.push('/suppliers');
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
                        <h3 className="text-center">Supplier Registration Page</h3>
                        <div className="card-body">
                            <form action="signup">
                                <div className="form-group">
                                    <label>Supplier Name </label>
                                    <input type="text" placeholder="Supplier Name" name="name"
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
                                <div className="form-group">
                                    <label>Items</label><br/>
                                    <select value={this.state.itemByItemidFk} onChange={this.changeItemsHandler}>
                                        {this.state.items.map((data) => (
                                            <option value={data.id}>{data.name}</option>
                                        ))}
                                    </select>
                                </div>
                                <button className="Btn btn-success" onClick={this.saveSupplier}>Save</button>
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

export default AddSupplierComponent;
