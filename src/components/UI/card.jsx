import image from "../../assets/img/msg1030804532-185010.jpg"
import "./card.css";

const  Card = (params) => {
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
            <h3>Black</h3>
            <div style={{
                display: "flex",
                gap: "10px",
            }}>
            {params.color.map((element) => {
                return <div style={{
                    height: "16px",
                    width: "16px",
                    backgroundColor: element.color,
                    borderRadius: "50%"


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
            <h3>{params.name}</h3>
            <h3>{params.price} &#x20bd;</h3>
        </footer>
    </article>
    )    
}

export{Card}