import Filter from "../../UI/filter";
import Header from "../../layouts/header/header";
import { Link } from "react-router-dom";
import "../../UI/UI.css";
import Reset from "@assets/img/reset.svg";
import React, {
  useEffect,
  useState,
  useRef,
  useContext,
  useLayoutEffect,
} from "react";
import { Card } from "../../UI/card";
import Sort from "../../UI/sort";
import { Context } from "../../../main";
import { toJS } from "mobx";
import { observer } from "mobx-react-lite";
import { ButtonIcon } from "@components/UI/button_icon.jsx";
import UserService from "@components/Services/user_service.js";
import ProductService from "@/components/Services/product_service.js";

const MassFilter = ["Кепки", "Футболки", "Кофты", "Штаны", "Кроссовки", "шелк"];

export default observer(function Shop() {
  const { store } = useContext(Context);

  const [activeFilter, setActiveFilter] = useState(-1);

  useLayoutEffect(() => {
    store.methodLoadPosts();
    UserService.getUser(1)
      .then((res) => {
        console.log("User data", res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    store.methodLoadPosts(10, 1);
  }, []);

  return (
    <>
      <Header />

      <section
        className="container"
        style={{
          display: "flex",
          gap: "10px",
          alignItems: "center",
          borderBottom: "1px solid black",
          paddingTop: "10px",
          paddingBottom: "10px",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            display: "flex",
            gap: "10px",
          }}
        >
          {MassFilter.map((tag, i) => {
            return (
              <React.Fragment key={i}>
                <Filter
                  handleClick={() => {
                    store.filter("", "", tag);
                    setActiveFilter(i);
                  }}
                  text={tag}
                  isActive={activeFilter == i}
                />
              </React.Fragment>
            );
          })}
          {/* Добавить фукнцию сброса сюда и настроить стили (передать в качестве параметров) */}
          {activeFilter != -1 && (
            <ButtonIcon
              image={Reset}
              text=""
              styles={{ display: "flex" }}
              handleClick={() => {
                store.methodLoadPosts();
                setActiveFilter(-1);
              }}
            />
          )}
        </div>
        <Sort />
      </section>

      <section
        className="container"
        style={{
          marginTop: "40px",
          display: "grid",
          gridTemplateColumns: "repeat(4, 251px)",
          gap: "30px",
          justifyContent: "center",
        }}
      >
        {store.products.items != null ? (
          <>
            {store.products.items.map((element, i) => {
              return (
                <React.Fragment key={i}>
                  <Card card={element} />
                </React.Fragment>
              );
            })}
          </>
        ) : (
          <>
            <h2>Загружается</h2>
          </>
        )}
      </section>
    </>
  );
});
