import React, { Component } from "react";
import CartItem from "./CartItem.js";

class Cart extends React.Component {
  render() {
    return (
      <div className="cart">
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
      </div>
    );
  }
}

export default Cart;
