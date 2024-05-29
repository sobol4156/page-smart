import React, { useState, useEffect } from "react";
import "./Cart.less";
import { iconsInfo, mobileBtn, social, general } from "../../../icons.js";

const Cart = () => {
  const [showCompany, setShowCompany] = useState(false);
  const [copiedData, setCopiedData] = useState("ДОБАВИТЬ В КОНТАКТЫ");
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const url = "https://665673099f970b3b36c56d1d.mockapi.io/company";
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Network response was not ok " + response.statusText);
        }
        const responseJson = await response.json();
        setData(responseJson[0]);
        setLoading(false);
        console.log(responseJson[0]);
      } catch (error) {
        console.error(
          "There has been a problem with your fetch operation:",
          error
        );
        setLoading(false);
      }
    }

    fetchData();
  }, []);
  //деструктуризация иконок
  const { photo1, arrow } = general;
  const { address, bd, email, fax, phone, rank, smartphone, websait } =
    iconsInfo;
  const { call, saveCard } = mobileBtn;
  const {
    dzen,
    facebook,
    instagram,
    linkedin,
    ok,
    telegram,
    tiktok,
    viber,
    vk,
    whatsup,
    youtube,
  } = social;
  // Функции смены страницы
  const handleToggleCompany = () => {
    setShowCompany(true);
  };

  const handleTogglEemployee = () => {
    setShowCompany(false);
  };

  // копируем данные и меняем кнопку
  const handleAddContact = () => {
    const contactName = "Иванов Иван Петрович";
    const contactPhone = "+7 (000) 000-00-00";
    const contactInfo = `${contactName}, ${contactPhone}`;

    navigator.clipboard
      .writeText(contactInfo)
      .then(() => console.log("Contact copied to clipboard"))
      .catch((error) =>
        console.log("Error copying contact to clipboard: " + error)
      );

    setCopiedData("СКОПИРОВАНО");
  };

  // Проверка кнопки добавить в контакты
  if (copiedData !== "ДОБАВИТЬ В КОНТАКТЫ") {
    setTimeout(() => {
      setCopiedData("ДОБАВИТЬ В КОНТАКТЫ");
    }, 1500);
  }

  if (loading) {
    return <div>Идёт загрузка</div>;
  }

  return (
    <div className="cart">
      {/* Шапка с переключением страниц */}
      <header className="header">
        <div
          onClick={handleTogglEemployee}
          className={`header__item ${!showCompany ? "item__selected" : ""}`}
        >
          <div>
            <img src={arrow} alt="" />
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
      {/* Первая страница */}
      <main className={`main ${!showCompany ? "active" : ""}`}>
        {!showCompany && (
          <div>
            <div className="main__content">
              <div className="main__images">
                <div className="main__images-img">
                  <img src={photo1} alt="" />
                </div>
                <div className="main__images-btn">
                  <button onClick={handleAddContact}>{copiedData}</button>
                </div>
                <div className="main__images-btn-mobile">
                  <button onClick={handleAddContact}>
                    <div className="btn-mobile">
                      <div>
                        <img src={saveCard} alt="" />
                      </div>
                      <span>Сохранить визитку</span>
                    </div>
                  </button>
                  <button>
                    <div className="btn-mobile">
                      <div>
                        <img src={call} alt="" />
                      </div>
                      <span>Позвонить</span>
                    </div>
                  </button>
                </div>
              </div>
              <div className="main__text">
                <div className="main__logo">
                  <span>Logo</span>
                </div>
                {/* Кастомная линия */}
                <div className="main__border"></div>
                <div className="main__info">
                  <div className="main__header">
                    <div className="main__FIO">
                      <span>
                        {data.surname} <br /> {data.fullName} 
                      </span>
                    </div>
                    <div className="main__post">
                      <span>{data.post}</span>
                    </div>
                  </div>
                  {/* Инфа о человеке */}
                  <div className="main__info-more">
                    <div className="main__border-mobile"></div>
                    <div className="main__phone inf">
                      <img src={smartphone} alt="" />
                      <a href="tel:+70000000000">{data.smartphone}</a>
                    </div>
                    <div className="main__phone inf">
                      <img src={phone} alt="" />
                      <a href="tel:+70000000000">{data.phone1}</a>
                    </div>
                    <div className="main__phone inf">
                      <img src={phone} alt="" />
                      <a href="tel:+70000000000">{data.phone2}</a>
                    </div>
                    <div className="main__email inf">
                      <img src={email} alt="" />
                      <a href="mailto:example@example.com">{data.email}</a>
                    </div>
                    <div className="main__website inf">
                      <img src={websait} alt="" />
                      <a
                        href="http://example.com"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {data.websait}
                      </a>
                    </div>
                    <div className="main__address inf">
                      <img src={address} alt="" /> <span>{data.address}</span>
                    </div>
                    <div className="main__BD inf">
                      <img src={bd} alt="" /> <span>{data.DB}</span>
                    </div>
                    <div className="main__rank inf">
                      <img src={rank} alt="" /> <span>{data.rank}</span>
                    </div>
                  </div>
                </div>
              </div>
              {/* Кастомные линия */}
              <div className="main__border-mobile-down"></div>
            </div>
            {/* Кастомные линия */}
            <div className="main__border-bottom"></div>
            <div className="main__social">
              {/* Социальные сети с переходами по ссылке */}
              <div className="main__social-icons">
                <a
                  href="https://telegram.org"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={telegram} alt="Telegram" />
                </a>
                <a
                  href="https://whatsapp.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={whatsup} alt="WhatsApp" />
                </a>
                <a
                  href="https://viber.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={viber} alt="Viber" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={instagram} alt="Instagram" />
                </a>
                <a
                  href="https://vk.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={vk} alt="VK" />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={facebook} alt="Facebook" />
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={youtube} alt="YouTube" />
                </a>
                <a
                  href="https://ok.ru"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={ok} alt="Odnoklassniki" />
                </a>
                <a
                  href="https://dzen.ru"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={dzen} alt="Dzen" />
                </a>
                <a
                  href="https://tiktok.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={tiktok} alt="TikTok" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={linkedin} alt="LinkedIn" />
                </a>
              </div>
            </div>
          </div>
        )}
      </main>
      {/* Вторая страница */}
      <main className={`main company ${showCompany ? "active" : ""}`}>
        <div className="company__content">
          <div className="company__header"></div>
          <div className="company__main">
            {/* Заголовок компании */}
            <div className="company__logo">
              <div className="company__logo-title">Logo</div>
              <div className="company__logo-text">
                <div className="company__logo-name">{data.companyName}</div>
                <div className="company__logo-description">
                  {data.companyDescrip}
                </div>
              </div>
              {/* Кастомная линия */}
              <div className="company__border-mobile"></div>
            </div>
            {/* Более подробное описание компании */}
            <div className="main__info-more company__info">
              <div className="main__phone inf">
                <img src={phone} alt="" />
                <a href="tel:+70000000000">{data.phone1}</a>
              </div>
              <div className="main__email inf">
                <img src={email} alt="" />
                <a href="mailto:example@example.com">{data.phone1}</a>
              </div>
              <div className="main__website inf">
                <img src={websait} alt="" />
                <a
                  href="http://example.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {data.websait}
                </a>
              </div>
              <div className="main__address inf">
                <img src={address} alt="" /> <span>{data.address}</span>
              </div>
              <div className="main__BD inf">
                <img src={bd} alt="" /> <span>{data.companyDB}</span>
              </div>
              <div className="main__rank inf">
                <img src={rank} alt="" />
                <span>
                  {data.clients.map((client) => (
                    <span>{client} </span>//Оставлять пустое место
                  ))}
                </span>
              </div>
              <div className="main__fax inf">
                <img src={fax} alt="" /> <span>Факс</span>
              </div>
            </div>
            <div className="company__border-mobile-down"></div>
          </div>
          {/* Кастомная линия */}
          <div className="main__border-bottom"></div>
          {/* Социальные сети с переходами по ссылке */}
          <div className="main__social">
            <div className="main__social-icons">
              <a
                href="https://telegram.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={telegram} alt="Telegram" />
              </a>
              <a
                href="https://whatsapp.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={whatsup} alt="WhatsApp" />
              </a>
              <a
                href="https://viber.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={viber} alt="Viber" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={instagram} alt="Instagram" />
              </a>
              <a
                href="https://vk.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={vk} alt="VK" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={facebook} alt="Facebook" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={youtube} alt="YouTube" />
              </a>
              <a href="https://ok.ru" target="_blank" rel="noopener noreferrer">
                <img src={ok} alt="Odnoklassniki" />
              </a>
              <a
                href="https://dzen.ru"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={dzen} alt="Dzen" />
              </a>
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={tiktok} alt="TikTok" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={linkedin} alt="LinkedIn" />
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Cart;
