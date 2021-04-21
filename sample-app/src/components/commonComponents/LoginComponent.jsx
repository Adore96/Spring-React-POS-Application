import React, {Component} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from "react-bootstrap";
import Form from "react-bootstrap/Form";
import "../../css/Login.css"
import UserService from "../../services/UserService";

class LoginComponent extends Component {

    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }

    }

    logIn = (event) => {
        event.preventDefault();
        let user = {
            username: this.state.username,
            email: this.state.email,
        };
        console.log('User => ' + JSON.stringify(user));

        UserService.addUser(user).then(res => {
            this.props.history.push('/users');
        });
    }

    validateForm = () => {
        return this.state.email.length > 0 && this.state.password.length > 0;
    }

    Passwordhandler = (event) => {
        console.log("Passwordhandler event");
        this.setState({password: event.target.value});
    }

    Emailhandler = (event) => {
        console.log("Emailhandler event");
        this.setState({email: event.target.value});
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-2">

                    </div>
                    <div className="col-sm-8">
                        <br/>
                        <Form onSubmit={this.logIn}>
                            <h2 className="text-center">Login Form</h2>

                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" name="email" placeholder="Enter email"
                                              onChange={this.Emailhandler}/>
                                <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" name="password" placeholder="Password"
                                              onChange={this.Passwordhandler}/>
                            </Form.Group>

                            <Form.Group controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Check me out"/>
                            </Form.Group>

                            <Button variant="primary" type="submit" disabled={!this.validateForm()}>Submit</Button>

                        </Form>

                        <br/>
                    </div>
                    <div className="col-sm-2">

                    </div>
                </div>
            </div>
        );
    }
}

export default LoginComponent;
