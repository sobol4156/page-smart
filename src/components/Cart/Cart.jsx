import React, { useState } from "react";
import "./Cart.less";
import arrow from "../../../public/img/svg/arrow.svg";
import photo1 from "../../../public/img/svg/photo1.svg";
import smartphone from "../../../public/img/svg/iconsInfo/smartphone.svg";
import phone from "../../../public/img/svg/iconsInfo/phone.svg";
import email from "../../../public/img/svg/iconsInfo/email.svg";
import websait from "../../../public/img/svg/iconsInfo/websait.svg";
import address from "../../../public/img/svg/iconsInfo/address.svg";
import bd from "../../../public/img/svg/iconsInfo/bd.svg";
import rank from "../../../public/img/svg/iconsInfo/rank.svg";
import fax from "../../../public/img/svg/iconsInfo/fax.svg";

import telegram from "../../../public/img/svg/social/telegram.svg";
import whatsup from "../../../public/img/svg/social/whatsup.svg";
import viber from "../../../public/img/svg/social/viber.svg";
import instagram from "../../../public/img/svg/social/instagram.svg";
import vk from "../../../public/img/svg/social/vk.svg";
import facebook from "../../../public/img/svg/social/facebook.svg";
import youtube from "../../../public/img/svg/social/youtube.svg";
import ok from "../../../public/img/svg/social/ok.svg";
import dzen from "../../../public/img/svg/social/dzen.svg";
import tiktok from "../../../public/img/svg/social/tiktok.svg";
import linkedin from "../../../public/img/svg/social/linkedin.svg";

const Cart = () => {
  const [showCompany, setShowCompany] = useState(false);

  const handleToggleCompany = () => {
    setShowCompany(true);
  };
  const handleTogglEemployee = () => {
    setShowCompany(false);
  };

  return (
    <div className="cart">
      <header className="header">
        <div
          onClick={handleTogglEemployee}
          className={`header__item ${!showCompany ? "item__selected" : ""}`}
        >
          <div>
            <img src={arrow} alt="1" />
          </div>
          <div>о сотруднике</div>
        </div>
        <div
          onClick={handleToggleCompany}
          className={`header__item ${showCompany ? "item__selected" : ""}`}
        >
          <div>о компании</div>
          <div>
            <img className="header__item-arrowRight" src={arrow} alt="" />
          </div>
        </div>
      </header>
      <main className={`main ${!showCompany ? "active" : ""}`}>
        <div className="main__content">
          <div className="main__images">
            <div className="main__images-img">
              <img src={photo1} alt="" />
            </div>
            <div className="main__images-btn">
              <button>ДОБАВИТЬ В КОНТАКТЫ</button>
            </div>
          </div>
          <div className="main__text">
            <div className="main__logo">
              <span>Logo</span>
            </div>
            <div className="main__border"></div>
            <div className="main__info">
              <div className="main__header">
                <div className="main__FIO">
                  <span>
                    Иванов <br /> Иван Петрович
                  </span>
                </div>
                <div className="main__post">
                  <span>Директор</span>
                </div>
              </div>

              <div className="main__info-more">
                <div className="main__phone inf">
                  <img src={smartphone} alt="" />{" "}
                  <span>+7 (000) 000-00-00</span>
                </div>
                <div className="main__phone inf">
                  <img src={phone} alt="" /> <span>+7 (000) 000-00-00</span>
                </div>
                <div className="main__phone inf">
                  <img src={phone} alt="" /> <span>+7 (000) 000-00-00</span>
                </div>
                <div className="main__email inf">
                  <img src={email} alt="" /> <span>Почта</span>
                </div>
                <div className="main__website inf">
                  <img src={websait} alt="" /> <span>Личный сайт</span>
                </div>
                <div className="main__address inf">
                  <img src={address} alt="" /> <span>Адрес</span>
                </div>
                <div className="main__BD inf">
                  <img src={bd} alt="" /> <span>Дата рождения</span>
                </div>
                <div className="main__rank inf">
                  <img src={rank} alt="" /> <span>Звание, учёная степень</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="main__border-bottom"></div>
        <div className="main__social">
          <div className="main__social-icons">
            <div className="social-item">
              <img src={telegram} alt="" />
            </div>
            <div className="social-item">
              <img src={whatsup} alt="" />
            </div>
            <div className="social-item">
              <img src={viber} alt="" />
            </div>
            <div className="social-item">
              <img src={instagram} alt="" />
            </div>
            <div className="social-item">
              <img src={vk} alt="" />
            </div>
            <div className="social-item">
              <img src={facebook} alt="" />
            </div>
            <div className="social-item">
              <img src={youtube} alt="" />
            </div>
            <div className="social-item">
              <img src={ok} alt="" />
            </div>
            <div className="social-item">
              <img src={dzen} alt="" />
            </div>
            <div className="social-item">
              <img src={tiktok} alt="" />
            </div>
            <div className="social-item">
              <img src={linkedin} alt="" />
            </div>
          </div>
        </div>
      </main>
      <main className={`main ${showCompany ? "active" : ""}`}>
        <div className="company__content">
          <div className="company__header"></div>
          <div className="company__main">
            <div className="company__logo">
              <div className="company__logo-title">Logo</div>
              <div className="company__logo-text">
                <div className="company__logo-name">Название компании</div>
                <div className="company__logo-description">Описание компании</div>
              </div>
            </div>
            <div className="main__info-more">
                <div className="main__phone inf">
                  <img src={phone} alt="" /> <span>+7 (000) 000-00-00</span>
                </div>
                <div className="main__email inf">
                  <img src={email} alt="" /> <span>Почта</span>
                </div>
                <div className="main__website inf">
                  <img src={websait} alt="" /> <span>Личный сайт</span>
                </div>
                <div className="main__address inf">
                  <img src={address} alt="" /> <span>Адрес</span>
                </div>
                <div className="main__BD inf">
                  <img src={bd} alt="" /> <span>Дата основания</span>
                </div>
                <div className="main__rank inf">
                  <img src={rank} alt="" /> <span>Клиенты Клиенты Клиенты Клиенты Клиенты Клиенты Клиенты Клиенты Клиенты Клиенты Клиенты Клиенты</span>
                </div>
                <div className="main__fax inf">
                  <img src={fax} alt="" /> <span>Факс</span>
                </div>
              </div>
          </div>
          <div className="main__border-bottom"></div>
        <div className="main__social">
          <div className="main__social-icons">
            <div className="social-item">
              <img src={telegram} alt="" />
            </div>
            <div className="social-item">
              <img src={whatsup} alt="" />
            </div>
            <div className="social-item">
              <img src={viber} alt="" />
            </div>
            <div className="social-item">
              <img src={instagram} alt="" />
            </div>
            <div className="social-item">
              <img src={vk} alt="" />
            </div>
            <div className="social-item">
              <img src={facebook} alt="" />
            </div>
            <div className="social-item">
              <img src={youtube} alt="" />
            </div>
            <div className="social-item">
              <img src={ok} alt="" />
            </div>
            <div className="social-item">
              <img src={dzen} alt="" />
            </div>
            <div className="social-item">
              <img src={tiktok} alt="" />
            </div>
            <div className="social-item">
              <img src={linkedin} alt="" />
            </div>
          </div>
        </div>
        </div>
      </main>
    </div>
  );
};

export default Cart;
