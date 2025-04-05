import { useSearchParams } from "react-router-dom";
import Header from "../../layouts/header/header";
import { toJS } from "mobx";
import { Context } from "../../../main";
import React, { useEffect, useState, useRef, useContext } from "react";
import { Card } from "../../UI/card";
import "./cart.css";
import { ButtonIcon, ButtonMinus, ButtonPlus } from "../../UI/button_icon";
import cross from "@assets/img/cross.svg";
import { observer } from "mobx-react-lite";
import plus from "@assets/img/plus.svg";
import minus from "@assets/img/minus.svg";
import CartService from "@/components/Services/cart_service.js";

const Cart = () => {
  const { store } = useContext(Context);

  const deleteFromBasket = (id) => {
    store.removeBasket(id);
  };

  const getCartById = (id) => {
    CartService.getCart(id)
      .then((res) => {
        console.log("Данные корзины", res);
      })

      .catch((err) => {
        console.log(err);
      });
  };

  const deleteCardById = (productId, userId) => {
    CartService.deleteCard(productId, userId)
      .then((res) => {
        console.log(res);
      })

      .catch((err) => {
        console.log(err);
      });
  };

  const [isLoad, setIsLoad] = useState(false);

  useEffect(() => {
    console.log("первый скилл", isLoad);
  }, [isLoad]);

  return (
    <>
      <Header />
      <div className="cart-container">
        {store.basket?.length !== 0 ? (
          <>
            <input
              type="checkbox"
              onChange={(element) => {
                console.log(element.target.checked);
                store.chooseAll(element.target.checked);
              }}
            />
            <div className="cart-items">
              {store.basket.map((item) => {
                return (
                  <article
                    className={
                      item.choosen_card
                        ? "cart-item --choosen-card"
                        : "cart-item"
                    }
                    onClick={() => store.chooseBasket(item.id)}
                  >
                    <ButtonIcon
                      styles={{
                        position: "absolute",
                        top: "5px",
                        right: "5px",
                      }}
                      image={cross}
                      handleClick={() => deleteFromBasket(item.id)}
                    />
                    <h1>{item.name}</h1>
                    <h2>{item.active_color}</h2>
                    <img className="cart-item__photo" src={item.img} alt="" />
                    <div
                      className="cart-item__counter-block"
                      onClick={(event) => {
                        event.stopPropagation();
                      }}
                    >
                      <ButtonIcon
                        image={minus}
                        handleClick={() => {
                          store.removeCountThings(item.id);
                        }}
                        styles={{ width: "20px", height: "20px" }}
                      />
                      <p>{item.count}</p>
                      <ButtonIcon
                        image={plus}
                        handleClick={() => {
                          store.addCountThings(item.id);
                        }}
                        styles={{ width: "20px", height: "20px" }}
                      />
                    </div>
                    <footer className="cart-item__price">
                      <p>Цена:</p>
                      <p>{item.price} ₽</p>
                    </footer>
                  </article>
                );
              })}
            </div>
            <div
              className="price_sum"
              style={{
                margin: "20px 50px",
                width: "150px",
                height: "70px",
                textAlign: "center",
                border: "1px solid",
                borderRadius: "10%",
              }}
            >
              Итоговая сумма: {store.sum}{" "}
            </div>
          </>
        ) : (
          <h1
            style={{
              width: "100%",
              textAlign: "center",
              marginTop: "100px",
            }}
          >
            Вы не добавили ничего
          </h1>
        )}
      </div>
      <button
        onClick={() => {
          deleteCardById("34ef738rg2hj497329312", "1");
        }}
      >
        Жмакни на меня
      </button>
    </>
  );
};

export default observer(Cart);
