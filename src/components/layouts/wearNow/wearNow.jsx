import { useState } from "react";
import "./wearNow.css";
import { Card } from "../../UI/card";

const CardMass = [
  {
    img: "logo192.png",
    name: "Кепка",
    price: "50",
    colors: [
      {
        color: "#000",
        img: "",
        color_name: "Black"
      },
      {
        color: "red",
        img: "",
        color_name: "Red"
      },
    ],  
  },

  {
    img: "logo192.png",
    name: "Кофта",
    price: "1998,99",
    colors: [
      {
        color: "#000",
        img: "",
        color_name: "Black"
      },
      {
        color: "red",
        img: "",
        color_name: "Red"
      },
    ],
  },
];

export default function WearNow(params) {
  const [num, setNum ] = useState(0)

  return (

    
    <section className="wearnow">
      
      
      {/* <button onClick={() => {
        setNum(num + 1)
      }}>++</button>
      <button onClick={() => {
        setNum(num - 1)
      }}>-</button>
      <h1 >{num}</h1> */}


      <h1>Заголовок</h1>
      <div className="wearNow_list">
        {CardMass.map((element, i) => {
          return (
            <Card name={element.name} price={element.price} color={element.colors}/>

          );
        })}
      </div>
    </section>
  );
}
