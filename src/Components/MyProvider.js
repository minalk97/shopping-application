import Data from "./Data";
import React, { Component, useState, useEffect } from "react";
import Products from "../ProductData";
var _ = require("lodash");
const MyProvider = (props) => {
  const [Users, setUsers] = useState(JSON.parse(localStorage.getItem("Users")));
  const [User, setUser] = useState(JSON.parse(sessionStorage.getItem("User")));
  const [Cart, setCart] = useState(JSON.parse(localStorage.getItem("Cart")));
  const [Orders, setOrders] = useState(
    JSON.parse(localStorage.getItem("Orders"))
  );
  const [Ordered, setOrdered] = useState(false);
  const [Product] = useState(Products);
  const [Total, setTotal] = useState(0);
  const [Tax, setTax] = useState(0);
  const [GrandTotal, setGrandtotal] = useState(0);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const addToCart = (Id) => {
    let productId = Id;
    let p = _.find(Products, (p) => p.productId == Id);
    let name = p.productName;
    let price = p.price;
    let image = p.imgUrl;
    let userId = User.userId;
    if (Cart) {
      if (Cart.find((u) => u.userId === User.userId)) {
        if (
          Cart.find((up) => up.userId === User.userId && up.productId === Id)
        ) {
          //***************both user and product*********************************
          let product = Cart.find(
            (up) => up.userId === User.userId && up.productId === Id
          );
          let quantity = product.quantity + 1;
          var index = Cart.findIndex(
            (up) => up.userId === User.userId && up.productId === Id
          );
          var pi = Cart[index];

          for (var i = 0; i < Cart.length; i++) {
            if (i === index) {
              Cart.splice(i, 1);
            }
          }
          let cart = [
            ...Cart,
            { userId, productId, quantity, name, price, image },
          ];

          setCart(cart);
        } else {
          //*************************user but no product*********************************
          let quantity = 1;

          let cart = [
            ...Cart,
            { userId, productId, quantity, name, price, image },
          ];
          setCart(cart);
        }
      } else {
        //**************************no user add product***********************************
        let quantity = 1;
        let cart = [
          ...Cart,
          { userId, productId, quantity, name, price, image },
        ];
        setCart(cart);
      }
    } else {
      //*************************no cart add product*******************************
      let quantity = 1;
      let cart = [{ userId, productId, quantity, name, price, image }];
      setCart(cart);
    }

    // setuCart();
    // if (uCart) {
    //   // Products.find((p) => p.productId == Id);
    //   let p = _.find(Products, (p) => p.productId == Id);
    //   let name = p.productName;
    //   let price = p.price;
    //   let image = p.imgUrl;
    //   let userId = User.userId;
    //   if (_.find(uCart, (p) => p.productId === Id)) {

    //   }
    // }
    // if (!Cart) {
    //   let productId = Id;
    //   let quantity = 1;

    //   let cart = [{ userId, productId, quantity, name, price, image }];
    //   // this.setState({
    //   //   Cart: cart,
    //   // });
    //   setCart(cart);
    //   // localStorage.setItem("Cart", JSON.stringify(cart));
    // } else if (Cart.length > 0) {
    //   if (Cart.find((p) => p.productId == Id)) {
    //     // this.setState({
    //     //   Cart: cart,
    //     // });
    //     // let Users = { ...this.Users, cart };
    //     // localStorage.setItem("Cart", JSON.stringify(cart));
    //   } else {
    //     let productId = Id;
    //     let quantity = 1;
    //     let index = Cart.findIndex((p) => p.productId == Id);
    //     let cart = [
    //       ...Cart,
    //       { userId, productId, quantity, name, price, image },
    //     ];
    //     // this.setState({
    //     //   Cart: cart,
    //     // });
    //     setCart(cart);
    //     // let Users = { ...this.Users, cart };
    //     // localStorage.setItem("Cart", JSON.stringify(cart));
    //   }
    // }
  };

  useEffect(() => {
    localStorage.setItem("Users", JSON.stringify(Users));
    sessionStorage.setItem("User", JSON.stringify(User));
    localStorage.setItem("Cart", JSON.stringify(Cart));
    localStorage.setItem("Orders", JSON.stringify(Orders));
  }, [Users, User, Cart, Orders]);

  return (
    <Data.Provider
      value={{
        Users,
        setUsers,
        User,
        setUser,
        Cart,
        setCart,
        Product,
        GrandTotal,
        setGrandtotal,
        Total,
        setTotal,
        Tax,
        setTax,
        addToCart,
        Orders,
        setOrders,
        Ordered,
        setOrdered,
        isLoggedIn,
        setIsLoggedIn,
      }}
    >
      {props.children}
    </Data.Provider>
  );
};

export default MyProvider;
