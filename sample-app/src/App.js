import React from 'react'
import HeaderComponent from "./components/commonComponent/HeaderComponent";
import UserListComponent from "./components/userComponent/UserListComponent";
import FooterComponent from "./components/commonComponent/FooterComponent";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import AddUserComponent from "./components/userComponent/AddUserComponent";
import UpdateUserComponent from "./components/userComponent/UpdateUserComponent";
import ViewUserComponent from "./components/userComponent/ViewUserComponent";
import LoginComponent from "./components/commonComponent/LoginComponent";
import ItemListComponent from "./components/itemComponent/ItemListComponent";
import UpdateItemComponent from "./components/itemComponent/UpdateItemComponent";
import SuppliersListComponent from "./components/supplierComponent/SuppliersListComponent";
import ViewItemComponent from "./components/itemComponent/ViewItemComponent";
import AddItemComponent from "./components/itemComponent/AddItemComponent";
import UpdateSupplierComponent from "./components/supplierComponent/UpdateSupplierComponent";
import ViewSupplierComponent from "./components/supplierComponent/ViewSupplierComponent";
import AddSupplierComponent from "./components/supplierComponent/AddSupplierCompo.jsx";
import ViewBillListComponent from "./components/billComponent/ViewBillListComponent";
import ViewSingleBillComponent from "./components/billComponent/ViewSingleBillComponent";


function App() {
    return (
        <div>
            <Router>
                <HeaderComponent/>

                <div className="Container">
                    <Switch>
                        <Route path="/login" component={LoginComponent}/>
                        <Route path="/" exact component={UserListComponent}/>

                        {/*user actions*/}
                        <Route path="/users" component={UserListComponent}/>
                        <Route path="/add-user" component={AddUserComponent}/>
                        <Route path="/update-user/:id" component={UpdateUserComponent}/>
                        <Route path="/delete-user/:id" component={UserListComponent}/>
                        <Route path="/view-user/:id" component={ViewUserComponent}/>

                        {/*stock actions*/}
                        <Route path="/stocks" component={ItemListComponent}/>
                        <Route path="/add-stock" component={AddItemComponent}/>
                        <Route path="/update-stock/:id" component={UpdateItemComponent}/>
                        <Route path="/view-stock/:id" component={ViewItemComponent}/>

                        {/*supplier actions*/}
                        <Route path="/suppliers" component={SuppliersListComponent}/>
                        <Route path="/add-supplier" component={AddSupplierComponent}/>
                        <Route path="/update-supplier/:id" component={UpdateSupplierComponent}/>
                        <Route path="/view-supplier/:id" component={ViewSupplierComponent}/>

                        {/*Bills*/}
                        <Route path="/bils" component={ViewBillListComponent}/>
                        <Route path="/view-bill" component={ViewSingleBillComponent}/>

                    </Switch>
                </div>

                <FooterComponent/>
            </Router>
        </div>
    );
}

export default App;
