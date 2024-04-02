
import { useState } from "react";
import "./card.css";

const  Card = ({card}) => {
    const [image, setImage] = useState(card.img)
    const [title, setTitle] = useState(card.colors[0].color_name)
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
        <img src={image} alt="" style={{
            width: "100%",
            objectFit: "cover",
            height: "100%"
        }}/>

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
        }}>+</button>
        
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
            {card.colors.map((element) => {
                return <div onClick={() => {
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