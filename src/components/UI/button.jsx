import "./button.css"
const Button = ({text, func}) => {
     return <button class="default" onClick={func} style={{
        display: "flex",
        cursor: "pointer",
        border: "solid 1px black",
        height: "42px",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "15px"
        
     }}>
         {text}
     </button>
}
export {Button}                                   