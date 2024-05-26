import React from "react";
import "./Cart.less";
const Cart = () => {
  return (
    <div className="cart">
      <header className="header">
        <div className="header__item">
          <div>--</div>
          <div>о сотруднике</div>
        </div>
        <div className="header__item">
          <div>о компании</div>
          <div>--</div>
        </div>
      </header>
      <main className="main"></main>
    </div>
  );
};

export default Cart;
