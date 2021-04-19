import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import {withRouter} from 'react-router-dom';

class HeaderComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {}
        this.addUser = this.addUser.bind(this);
        this.login = this.login.bind(this);
        this.suppliers = this.suppliers.bind(this);
        this.stocks = this.stocks.bind(this);
    }

    addUser() {
        this.props.history.push('/add-user');
    }

    login() {
        this.props.history.push('/login');
    }

    suppliers() {
        this.props.history.push('/suppliers');
    }

    stocks() {
        this.props.history.push('/stocks');
    }

    render() {
        return (

            <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" onClick={this.addUser}>Add User</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" onClick={this.suppliers}>Suppliers</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" onClick={this.stocks}>Stock List</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" onClick={this.login}>Logout</a>
                    </li>
                </ul>
            </nav>

        );
    }
}

export default withRouter(HeaderComponent);
