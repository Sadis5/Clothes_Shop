import Filter from "../../UI/filter";
import Header from "../../layouts/header/header";
import { Link } from "react-router-dom";
import "../../UI/UI.css"
import { useEffect, useState } from "react";
import { Card } from "../../UI/card";
import Sort from "../../UI/sort";

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

    <section className="container" style={{
        display: "flex",
        gap: "10px",
        alignItems: "center",
        borderBottom: "1px solid black",
        paddingTop: "10px",
        paddingBottom: "10px",
        justifyContent: "space-between"
        
    }}>
        <div style={{
            display: "flex",
            gap: "10px"
        }}>
        {MassFilter.map((element, i) => {
            return (
                <Filter  text={element}/>
            )

        })}

        </div>
        <Sort/>
    </section>
       

    <section className="container" style={{
        marginTop: "40px",
        display: "grid",
        gridTemplateColumns: "repeat(4, 251)",
        gap: "30px",
        justifyContent: "center"
    }}>

    {posts != null ? (
        <>
        {posts.map((element) => {
            return <>
            <Card card={element}/>

            
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