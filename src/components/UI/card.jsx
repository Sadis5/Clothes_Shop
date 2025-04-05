import Heart from "@assets/img/heart-alt-svgrepo-com.svg";
import HeartRed from "@assets/img/heart-svgrepo-com.svg"
import { useContext, useEffect, useState } from "react";
import "./card.css";
import { ButtonIcon } from "./button_icon";
import { Context } from "../../main";
import { toJS } from 'mobx'
import { Link } from "react-router-dom";
const Card = ({card}) => {
    const [image, setImage] = useState(card.img)
    const [title, setTitle] = useState(card.colors[0].color_name)
    const [isFavourite, setIsFavourite] = useState(null);
    const {store} = useContext(Context)
    const [isBasket, setIsBasket] = useState(false);



    // Функция поиска в массиве по id
    const isInArray = (mass, id) =>{
        for (let i = 0; i < mass.length; i++) {
            const element = mass[i];
            if (element.id == id) {
                return true
            }
            
        }

        return false
    }




    useEffect(() => {
        let array = toJS(store.favourite)
        if (isInArray(array, card.id)) {
            setIsFavourite(true)
        } 
        else {
            setIsFavourite(false)
        }
        let basketArray = toJS(store.basket)
        if (isInArray(basketArray, card.id)) {
                setIsBasket(true)
            }
        else {
            setIsBasket(false)
        }
    }, []);

    return (
    <article className="card" style={{
        
        width: "251px",
        height: "348px", 
        display: "flex",
        flexDirection: "column",
        gap: "13px",

        }}>
        
        <div style={{
            background: "#f6f6f6",
            height: "279px",
            position: "relative",
            width: "100%"
        }}>
        
    
        <button onClick={() => {
            if (isFavourite){
                store.MetodRemoveFavourite(card.id)
                setIsFavourite(false)
                
            }
            else {
                store.MetodAddFavourite(card)
                
                setIsFavourite(true)
            }
            console.log(toJS(store.favourite));
        }} style={{
            
            background: "none",
            border: "none",
            cursor: "pointer",
            right: "5px",
            top: "5px",
            position: "absolute"
    
      
    
        }}>
            
            <img src={isFavourite? HeartRed : Heart} alt="" style={{
            height: "28px",
            width: "28px"
        }}/></button>

        <Link to={`/singleproduct/${card.id}`}>
        <img src={image} alt="" style={{
            width: "100%",
            objectFit: "cover",
            height: "100%"
        }}/>
        </Link>

        <button style={{
            fontSize: "40px",
            border: "none",
            outline: "none",
            background: "none",
            cursor: "pointer",
            position: "absolute",
            bottom: "5px",
            right: "5px",
            zIndex: "10"
        }} onClick={() => {
            if (isBasket){
                store.removeBasket(card.id)
                setIsBasket(false)
                
            }
            else {
                store.addBasket(card)
                
                setIsBasket(true)
            }
            console.log(toJS(store.basket));
        }} >+</button>
        
        <div className="color_choose" style={{
           padding: "15px",
           display: "flex",
           flexDirection: "column",
           gap: "16px",
           backgroundColor: 'rgba(255, 255, 255, 0.8)',
            position: "absolute",
            bottom: 0,
            width: "100%",



            
        }
    }>
            <h3>{title}</h3>
            <div style={{
                display: "flex",
                gap: "10px",
            }}>
            {card.colors.map((element,i) => {
                return <div key={i} onClick={() => {
                    setImage(element.img)
                    setTitle(element.color_name)
                }} style={{
                    height: "16px",
                    width: "16px",
                    backgroundColor: element.color,
                    borderRadius: "50%",
                    cursor: "pointer"


                }}>
                
            </div>
        })}
        </div>


        </div>


        </div>
        <footer style={{
            display: "flex",
            flexDirection: "column",
            gap: "5px"
        }}>
            <h3>{card.name}</h3>
            <h3>{card.price} &#x20bd;</h3>
        </footer>
    </article>
    )    
}

export{Card}