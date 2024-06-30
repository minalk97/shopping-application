import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ProductList from "./Components/ProductList";
import LocalStorage from "./Components/LocalStorage";
import Registration from "./Components/Registration";
import Login from "./Components/Login";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import ViewProduct from "./Components/ViewProduct";
import ReactDOM from "react-dom";
import Products from "./ProductData";
import ViewCart from "./Components/ViewCart";
import Profile from "./Components/Profile";
import User from "./Components/User";
import EditProfile from "./Components/EditProfile";
import React, { useState, Component } from "react";
import MyProvider from "./Components/MyProvider";
import AddAddress from "./Components/AddAddress";
import Checkout from "./Components/Checkout";
import OrderHistory from "./Components/OrderHistory";
import TopProducts from "./Components/TopProducts";
import Data from "./Components/Data";
import ProtectedRoutes from "./Components/ProtectedRoutes";
import Styled from "styled-components";
var _ = require("lodash");

const Div =Styled.div`
margin-bottom:200px;
overflow:auto;
`
function App() {
  return (
    <div>
      <MyProvider>
        <Route path="/" component={Header}></Route>
        {/* <Route path="/Login" component={Login}></Route> */}
        <Div>
        <Route path="/Signup" component={Registration}></Route>
        <Route path="/Products"  component={ProductList}></Route>
        <Route path='/Login' component={Login}></Route>
        <Route path="/AfterLogin" exact component={ProductList}></Route>
        <Route path="/viewProduct/:id?" exact component={ViewProduct}></Route>
       
        {/* <Route path="/EditProfile" exact component={EditProfile}></Route>
        <Route path="/Cart" exact component={ViewCart}></Route>
        <Route path="/AddAddress" exact component={AddAddress}></Route>
        <Route path="/Checkout" exact component={Checkout}></Route>
        <Route path="/OrderHistory" exact component={OrderHistory}></Route> */}
        <Route path="/" exact component={TopProducts}></Route>
        <Data.Consumer>
          {
            (context)=>(
              <>
              <ProtectedRoutes path="/Profile" component={Profile} isAuth={context.isLoggedIn}></ProtectedRoutes>
              <ProtectedRoutes path="/Cart"  component={ViewCart} isAuth={context.isLoggedIn}></ProtectedRoutes>
              <ProtectedRoutes path="/AddAddress"  component={AddAddress} isAuth={context.isLoggedIn}></ProtectedRoutes>
              <ProtectedRoutes path="/Checkout"  component={Checkout} isAuth={context.isLoggedIn}></ProtectedRoutes>
              <ProtectedRoutes path="/OrderHistory"  component={OrderHistory} isAuth={context.isLoggedIn}></ProtectedRoutes>
              <ProtectedRoutes path="/EditProfile"  component={EditProfile} isAuth={context.isLoggedIn}></ProtectedRoutes>

              </>
              )
          }
        </Data.Consumer>
        </Div>
       
      </MyProvider>
      {/* <Route path='/' component={Header}></Route> */}

      <Footer />
    </div>
  );
}

export default App;
