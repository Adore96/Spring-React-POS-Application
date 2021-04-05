import React from 'react'
import HeaderComponent from "./components/HeaderComponent";
import UserComponent from "./components/UserComponent";
import FooterComponent from "./components/FooterComponent";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import AddUserComponent from "./components/AddUserComponent";
import UpdateUserComponent from "./components/UpdateUserComponent";
import ViewUserComponent from "./components/ViewUserComponent";
import LoginComponent from "./components/LoginComponent";
import StocksListComponent from "./components/StocksListComponent";


function App() {
    return (
        <div>
            <Router>
                <HeaderComponent/>

                <div className="Container">
                    <Switch>
                        <Route path="/" exact component={UserComponent}/>
                        <Route path="/users" component={UserComponent}/>
                        <Route path="/add-user" component={AddUserComponent}/>
                        <Route path="/update-user/:id" component={UpdateUserComponent}/>
                        <Route path="/delete-user/:id" component={UserComponent}/>
                        <Route path="/view-user/:id" component={ViewUserComponent}/>
                        <Route path="/login" component={LoginComponent}/>
                        <Route path="/stocks" component={StocksListComponent}/>
                    </Switch>
                </div>

                <FooterComponent/>
            </Router>
        </div>
    );
}

export default App;
