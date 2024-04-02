import Filter from "../../UI/filter";
import Header from "../../layouts/header/header";
import { Link } from "react-router-dom";
import "../../UI/UI.css"
import { useEffect, useState } from "react";
import { Card } from "../../UI/card";

const MassFilter = ["Кепки", "Футболки", "Кофты", "Штаны", "Кроссовки"]

export default function Shop() {
    const [posts, setPosts] = useState(null);

    const LoadPost = () => {
        fetch("./API/products.json")
        .then((response) => {
            
            return response.json();
        })
        .then((json) => {
            console.log(json);
            setPosts(json);
        })
        .catch((error) => {
            console.log(error);
        })
        .finally(() => {
            console.log("Ok");
        })
    }

useEffect(() => {
  LoadPost()


}, [])

    
    
    return <>
    <Header/>
    <section style={{
        display: "flex",
        gap: "10px",
        
        
    }}>
        {MassFilter.map((element, i) => {
            return (
                <Filter  text={element}/>
            )
        })}
    </section>
       

    <section style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "10px"
    }}>

    {posts != null ? (
        <>
        {posts.map((element) => {
            return <>
            <Card card={element}/>
            <img src={element.thumbnailUrl} alt="" />
            <p>{element.title}</p>
            
            </>
        })}
        </>

    ): 
    <>
    <h2>Загружается</h2>
    </>}

    </section>
    </>
    
}