import { useState } from "react";
import "./wearNow.css";

const CardMass = [
  {
    img: "logo192.png",
    name: "Кепка",
    price: "50",
    colors: [
      {
        color: "#000",
        img: "",
      },
      {
        color: "red",
        img: "",
      },
    ],
  },
];

export default function WearNow(params) {
  const [num, setNum ] = useState(0)

  return (

    
    <section className="wearnow">
      
      
      <button onClick={() => {
        setNum(num + 1)
      }}>++</button>
      <button onClick={() => {
        setNum(num - 1)
      }}>-</button>
      <h1 >{num}</h1>


      <h1>Заголовок</h1>
      <div className="wearNow_list">
        {CardMass.map((element, i) => {
          return (
            <article className="wearNow_card" key={i}>
              <div className="wearNow_card_top">
                <img src={element.img} alt="" />
                <div className="wearNow_card_colors">
                  {element.colors.map((color) => {
                    return (
                      <div
                        style={{ backgroundColor: color.color }}
                        className="colors_item"
                      ></div>
                    );
                  })}
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
