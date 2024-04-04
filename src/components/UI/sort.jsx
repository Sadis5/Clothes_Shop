import { useState } from "react"

export default function Sort() {
    const [IsOpen, setIsOpen] = useState(false)
    
    return <div className="sort" style={{
       
        position: "relative",
        
    }}>


        <button onClick={() => {
            setIsOpen(!IsOpen)
        }} style={{cursor: "pointer", background: "none", border: "none", fontSize: "16px"}}>Sort</button>
        <div style={{
            display: IsOpen?"flex": "none",
            flexDirection: "column",
            position: "absolute",
            top: "25px",
            backgroundColor: "white",
            padding: "20px",
            border: "1px solid black",
            gap: "15px",
            zIndex: "10",
            width: "200px",
            alignItems: "start",
            left: "-165px"
           

        }}>
            <button className="sort_button">Избранные</button>
            <button className="sort_button">Популярные</button>
            <button className="sort_button">Цена от низкой к высокой</button>
            <button className="sort_button">Цена от высокой к низкой</button>
        </div>
        
    </div>
    
}