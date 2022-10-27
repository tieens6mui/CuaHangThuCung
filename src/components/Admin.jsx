import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Sidebar from './Sidebar/Sidebar';
import ProductList from './Products/App';
import Topbar from './Topbar/Topbar';
import NewProduct from './Products/NewProducts/newProducts';
import { Provider } from "./Products/Context";
import { ActionsProduct } from './Products/Action';
import React from 'react';


function Admin(){
  const dataProduct = ActionsProduct();
    return (
      <Router >
        <Topbar />
      <div className="container-fluid">
      <div className="row">
      <Sidebar />
        <Switch>
          <Route path="/Admin/Product">
            <ProductList />
          </Route>
          <Route path="/Admin/AddProduct">
            <Provider value={dataProduct}>
            <NewProduct />
            </Provider>
          </Route>
        </Switch>
        </div>
      </div>
    </Router>
      );
}
export default Admin;