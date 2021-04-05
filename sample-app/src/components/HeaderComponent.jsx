import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import {withRouter} from 'react-router-dom';

class HeaderComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {}
        this.addUser = this.addUser.bind(this);
        this.login = this.login.bind(this);
    }

    addUser() {
        this.props.history.push('/add-user');
    }

    login() {
        this.props.history.push('/login');
    }

    render() {
        return (

            <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" onClick={this.addUser}>Add User</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" >Link 2</a>
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
