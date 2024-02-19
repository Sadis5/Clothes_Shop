import WhiteLogo from "../../../assets/img/logo/whiteLogo.svg";
import Basket from "../../../assets/img/basket.svg";
import "./header.css";

export default function Header() {
  return (
    <>
      <div className="header container">
        <div className="header_top">
          <img src={WhiteLogo} alt="" className="whiteLogo" />
          <h1>Solyar</h1>
          <a href="" className="link_basket">
            <img src={Basket} alt="" className="basket" />
          </a>
        </div>

        <nav className="header_bottom">
          <ul className="link_head">
            <li className="link">Кепки</li>
            <li className="link">Футболки</li>
            <li className="link">Кофты</li>
            <li className="link">Штаны</li>
            <li className="link">Кроссовки</li>
          </ul>
        </nav>
      </div>
    </>
  );
}
