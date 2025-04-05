import WhiteLogo from "../../../assets/img/logo/whiteLogo.svg";
import Basket from "../../../assets/img/basket.svg";
import Search from "../../../assets/img/search_icon.svg";
import Profile from "../../../assets/img/profile.svg";
import Liked from "../../../assets/img/heart_like.svg";
import "./header.css";
import { ButtonIcon } from "../../UI/button_icon";
import { Link, useNavigate } from "react-router-dom";

export default function Header() {
  function F() {
    console.log("Нажали ");
  }
  const nav = useNavigate();
  const Navigate = (url) => {
    nav(`/${url}`);
  };

  return (
    <>
      <div className="header container">
        <div className="header_top">
          <img src={WhiteLogo} alt="" className="whiteLogo" />
          <h1>
            <Link to="/">Solyar</Link>
          </h1>
          <div
            style={{
              display: "flex",
              gap: "50px",
              alignItems: "center",
            }}
          >
            <ButtonIcon image={Search} handleClick={F} />
            <ButtonIcon
              image={Profile}
              handleClick={() => {
                Navigate("login");
              }}
            />
            <ButtonIcon
              image={Liked}
              handleClick={() => {
                Navigate("favourite");
              }}
            />
            <ButtonIcon
              image={Basket}
              handleClick={() => {
                Navigate("basket");
              }}
            />
          </div>
        </div>

        <nav className="header_bottom">
          <ul className="link_head">
            <li className="link">
              <Link to="/shop">Shop</Link>
            </li>
            <li className="link">
              <Link>Full Set</Link>
            </li>
            {/* <li className="link">Кепки</li>
            <li className="link">Футболки</li>
            <li className="link">Кофты</li>
            <li className="link">Штаны</li>
            <li className="link">Кроссовки</li> */}
          </ul>
        </nav>
      </div>
    </>
  );
}
