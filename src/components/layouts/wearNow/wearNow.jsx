import { useState } from "react";
import "./wearNow.css";
import { Card } from "../../UI/card";
import Baner from "../../../assets/img/baner.jpg"
// import { Button } from "./components/UI/button";
import { useNavigate } from "react-router-dom";
import { Button } from "../../UI/button";





const CardMass = [
  {
    img: "./img/black_crown.jpg",
    name: "Кепка",
    price: "50",
    colors: [
      {
        color: "#000",
        img: "./img/black_crown.jpg",
        color_name: "Black"
      },
      {
        color: "red",
        img: "./img/red_crown.jpg",
        color_name: "Red"
      },
    ],  
  },

  {
    img: "./img/sova2.jpg",
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
  const navigation = useNavigate();
  return (
    
    <section className="wearnow">
      
      <div className="baner" style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        alignItems: "start", 
        gap: "20px",
        backgroundImage: `url(${Baner})`,
        width: "100%",
        height: "712px",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "contain",
        paddingLeft: "82px",
        paddingBottom: "75px"


      }}>
      {/* <img src={Baner} alt="" style={{
        width: "100%",
        height: "712px",
        objectFit: "contain",
        border: "solid 1px black"
      }}/> */}


      <h4 style={{
        fontSize: "25px"
      }}>Solyar is the best clothes shop</h4>

      

      <Button text="Shop Now" func={() => {
        navigation("/shop")
      }}/>


      </div>
      
      
      {/* <button onClick={() => {
        setNum(num + 1)
      }}>++</button>
      <button onClick={() => {
        setNum(num - 1)
      }}>-</button>
      <h1 >{num}</h1> */}


      
      <div className="wearNow_list" style={{
        padding: "72px"
      }}>
        {CardMass.map((element, i) => {
          return (
            <Card card={element}/>

          );
        })}
      </div>
    </section>
  );
}
