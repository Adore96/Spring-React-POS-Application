import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import {withRouter} from 'react-router-dom';
import * as ReactBootstrap from 'react-bootstrap';

class HeaderComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    addUser = () => {
        this.props.history.push('/add-user');
    }
    addItems = () => {
        this.props.history.push('/add-item');
    }
    addSupplier = () => {
        this.props.history.push('/add-supplier');
    }

    Users = () => {
        this.props.history.push('/users');
    }

    login = () => {
        this.props.history.push('/login');
    }

    suppliers = () => {
        this.props.history.push('/suppliers');
    }

    bills = () => {
        this.props.history.push('/bills');
    }

    items = () => {
        this.props.history.push('/items');
    }

    render() {
        return (

            <nav className="navbar navbar-expand-sm bg-dark navbar-dark">

                {/*list pages*/}
                <ReactBootstrap.Dropdown>
                    <ReactBootstrap.Dropdown.Toggle variant="success" id="dropdown-basic">
                        Lists
                    </ReactBootstrap.Dropdown.Toggle>
                    <ReactBootstrap.Dropdown.Menu>
                        <ReactBootstrap.Dropdown.Item onClick={this.Users}>User List</ReactBootstrap.Dropdown.Item>
                        <ReactBootstrap.Dropdown.Item onClick={this.items}>Item List</ReactBootstrap.Dropdown.Item>
                        <ReactBootstrap.Dropdown.Item onClick={this.suppliers}>Supplier List</ReactBootstrap.Dropdown.Item>
                        <ReactBootstrap.Dropdown.Item onClick={this.bills}>Bills</ReactBootstrap.Dropdown.Item>
                    </ReactBootstrap.Dropdown.Menu>
                </ReactBootstrap.Dropdown>

                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" onClick={this.addUser}>Add User</a>
                    </li>
                </ul>
            </nav>

        );
    }
}

export default withRouter(HeaderComponent);
