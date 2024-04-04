export default function Filter({text}) {

    return <button className="filter_button" style={{
        
        height: "30px",
        borderRadius: "10px",
        padding: "0 10px",
        cursor: "pointer",
       

        
    }}>

        {text}

   

    </button>
    
}