import React from 'react'
import HeaderComponent from "./components/HeaderComponent";
import UserListComponent from "./components/UserListComponent";
import FooterComponent from "./components/FooterComponent";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import AddUserComponent from "./components/AddUserComponent";
import UpdateUserComponent from "./components/UpdateUserComponent";
import ViewUserComponent from "./components/ViewUserComponent";
import LoginComponent from "./components/LoginComponent";
import StocksListComponent from "./components/StocksListComponent";
import SuppliersListComponent from "./components/SuppliersListComponent";


function App() {
    return (
        <div>
            <Router>
                <HeaderComponent/>

                <div className="Container">
                    <Switch>
                        <Route path="/" exact component={UserListComponent}/>
                        <Route path="/users" component={UserListComponent}/>
                        <Route path="/add-user" component={AddUserComponent}/>
                        <Route path="/update-user/:id" component={UpdateUserComponent}/>
                        <Route path="/delete-user/:id" component={UserListComponent}/>
                        <Route path="/view-user/:id" component={ViewUserComponent}/>
                        <Route path="/login" component={LoginComponent}/>
                        <Route path="/stocks" component={StocksListComponent}/>
                        <Route path="/suppliers" component={SuppliersListComponent}/>
                    </Switch>
                </div>

                <FooterComponent/>
            </Router>
        </div>
    );
}

export default App;
