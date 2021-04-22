import React from 'react'
import HeaderComponent from "./components/commonComponents/HeaderComponent";
import UserListComponent from "./components/userComponents/UserListComponent";
import FooterComponent from "./components/commonComponents/FooterComponent";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import AddUserComponent from "./components/userComponents/AddUserComponent";
import UpdateUserComponent from "./components/userComponents/UpdateUserComponent";
import ViewUserComponent from "./components/userComponents/ViewUserComponent";
import LoginComponent from "./components/commonComponents/LoginComponent";
import StocksListComponent from "./components/stockComponents/StocksListComponent";
import UpdateStockComponent from "./components/stockComponents/UpdateStockComponent";
import SuppliersListComponent from "./components/supplierComponent/SuppliersListComponent";
import ViewStockComponent from "./components/stockComponents/ViewStockComponent";
import AddStockComponent from "./components/stockComponents/AddStockComponent";
import UpdateSupplierComponent from "./components/supplierComponent/UpdateSupplierComponent";
import ViewSupplierComponent from "./components/supplierComponent/ViewSupplierComponent";
import AddSupplierComponent from "./components/supplierComponent/AddSupplierComponent";


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
                        <Route path="/stocks" component={StocksListComponent}/>
                        <Route path="/add-user" component={AddStockComponent}/>
                        <Route path="/update-stock/:id" component={UpdateStockComponent}/>
                        <Route path="/view-stock/:id" component={ViewStockComponent}/>

                        {/*supplier actions*/}
                        <Route path="/suppliers" component={SuppliersListComponent}/>
                        <Route path="/add-supplier" component={AddSupplierComponent}/>
                        <Route path="/update-supplier/:id" component={UpdateSupplierComponent}/>
                        <Route path="/view-supplier/:id" component={ViewSupplierComponent}/>
                    </Switch>
                </div>

                <FooterComponent/>
            </Router>
        </div>
    );
}

export default App;
