import React, {Component} from 'react';
import UserService from "../services/UserService";

class ViewUserComponent extends Component {

    constructor(props) {
        super(props);

        this.state = {
            id: this.props.match.params.id,
            user: {}
        }
    }

    componentDidMount() {
        UserService.getUser(this.state.id).then(response => {
            this.setState({user: response.data});
        })
    }

    cancel() {
        this.props.history.push('/users');
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="card col-md-6 offset-md-3">
                        <h3 className="text-center">User Update Page</h3>
                        <div className="card-body">
                            <form action="signup">
                                <div className="form-group">
                                    <label>User Name </label>
                                    <input type="text" placeholder="User Name" name="userName"
                                           className="form-control"
                                           value={this.state.user.username} onChange={this.changeUsernamehandler}
                                           readOnly={true}/>
                                </div>
                                <div className="form-group">
                                    <label>Email </label>
                                    <input type="text" placeholder="Email" name="email"
                                           className="form-control"
                                           value={this.state.user.username} onChange={this.changeEmailhandler}/>
                                </div>
                                <div className="form-group">
                                    <label>Password </label>
                                    <input type="text" placeholder="Password" name="password"
                                           className="form-control"
                                           value={this.state.user.username} onChange={this.changePasswordhandler}/>
                                </div>
                                <div className="form-group">
                                    <label>Telephone </label>
                                    <input type="text" placeholder="Telephone Number" name="telephone"
                                           className="form-control"
                                           value={this.state.user.username} onChange={this.changeTelephonehandler}/>
                                </div>
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

export default ViewUserComponent;
