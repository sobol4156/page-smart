import React from "react";
import "./Cart.less";
import arrow from "../../../public/img/svg/arrow.svg";
import photo1 from "../../../public/img/svg/photo1.svg";

const Cart = () => {
  return (
    <div className="cart">
      <header className="header">
        <div className="header__item item__selected">
          <div>
            <img src={arrow} alt="1" />
          </div>
          <div>о сотруднике</div>
        </div>
        <div className="header__item">
          <div>о компании</div>
          <div>
            <img className="header__item-arrowRight" src={arrow} alt="" />
          </div>
        </div>
      </header>
      <main className="main">
        <div className="main__content">
          <div className="main__images">
            <div className="main__images-img"><img src={photo1} alt="" /></div>
            <div className="main__images-btn"><button>ДОБАВИТЬ В КОНТАКТЫ</button></div>
          </div>
          <div className="main__text">
            <div className="main__logo">
              <img src="" alt="" /> <span></span>
            </div>
            <div className="main__border">
              <img src="" alt="" /> <span></span>
            </div>
            <div className="main__FIO">
              <img src="" alt="" /> <span></span>
            </div>
            <div className="main__post">
              <img src="" alt="" /> <span></span>
            </div>
            <div className="main__phone">
              <img src="" alt="" /> <span></span>
            </div>
            <div className="main__phone">
              <img src="" alt="" /> <span></span>
            </div>
            <div className="main__phone">
              <img src="" alt="" /> <span></span>
            </div>
            <div className="main__email">
              <img src="" alt="" /> <span></span>
            </div>
            <div className="main__website">
              <img src="" alt="" /> <span></span>
            </div>
            <div className="main__address">
              <img src="" alt="" /> <span></span>
            </div>
            <div className="main__BD">
              <img src="" alt="" /> <span></span>
            </div>
            <div className="main__rank">
              <img src="" alt="" /> <span></span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Cart;
