import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import "./appadmin.css";
import Home from "./Home"; 
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UserList from "./UserList";
import User from "./User";
import NewUser from "./NewUser";
import ProductList from "./ProductList";
import Product from "./Product";
import NewProduct from "./NewProduct";

function appadmin() {
  return (
    <Router>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route >
         <Route path="/users">
            <UserList />
          </Route>
          <Route path="/user/:userId">
            <User />
          </Route>
          <Route path="/newUser">
            <NewUser />
          </Route>
          <Route path="/products">
            <ProductList />
          </Route>
          <Route path="/product/:productId">
            <Product />
          </Route>
          <Route path="/newproduct">
            <NewProduct />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default appadmin;