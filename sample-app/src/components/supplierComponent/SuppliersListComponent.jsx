import React, {Component} from 'react';

class SuppliersListComponent extends Component {
    render() {
        return (
            <div>
                <h1 className="text-center">Suppliers List</h1>
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

export default SuppliersListComponent;
