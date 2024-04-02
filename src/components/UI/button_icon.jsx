const ButtonIcon =  ({image, handleClick}) => {
    return  <button onClick={handleClick} style={{
        
        background: "none",
        border: "none",
        cursor: "pointer"

    }}>
     <img src={image} alt="" className="basket" style={{
                height: "28px",
                width: "28px"
     }}/>
     </button>
}
export {ButtonIcon}