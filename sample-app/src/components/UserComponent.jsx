import React from 'react';
import userService from "../services/UserService";
import UserService from "../services/UserService";

class UserComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            users: []
        }
        this.updateUser = this.updateUser.bind(this);
        this.deleteUser = this.deleteUser.bind(this);
        this.viewUser = this.viewUser.bind(this);
    }

    updateUser(id) {
        this.props.history.push(`/update-user/${id}`);
    }

    deleteUser(id) {
        UserService.deleteUser(id).then(res => {
            this.setState({users: this.state.users.filter(user => user.id !== id)});
        })
    }

    viewUser(id) {
        this.props.history.push(`/view-user/${id}`);
    }

    componentDidMount() {
        //then refers with a JS Promise
        userService.getUsers().then((response) => {
            this.setState({users: response.data})
        });
    }

    render() {
        return (
            <div>
                <h1 className="text-center">Users List</h1>
                <table className="table table-striped">

                    <thead>
                    <tr>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Telephone</th>
                        <th>Actions</th>
                    </tr>
                    </thead>

                    <tbody>
                    {
                        this.state.users.map(
                            user =>
                                <tr key={user.id}>
                                    <td>{user.username}</td>
                                    <td>{user.email}</td>
                                    <td>{user.telephone}</td>
                                    <td>
                                        <button onClick={() => this.updateUser(user.id)}
                                                className="btn btn-outline-info">Update
                                        </button>
                                        <button style={{marginLeft: "10px"}} onClick={() => this.deleteUser(user.id)}
                                                className="btn btn-outline-danger">Delete
                                        </button>
                                        <button style={{marginLeft: "10px"}} onClick={() => this.viewUser(user.id)}
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

export default UserComponent;
