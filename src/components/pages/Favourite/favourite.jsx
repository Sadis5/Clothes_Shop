import { useSearchParams } from "react-router-dom";
import Header from "../../layouts/header/header";
import { toJS } from 'mobx'
import { Context } from "../../../main";
import React, { useEffect, useState, useRef, useContext } from "react";
import { Card } from "../../UI/card";
import "./favourite.css"



export default function Favourite() {

    const {store} = useContext(Context)
    const [Favourite, setFavourite] = useState([]);
    useEffect(() => {
        let temp = toJS(store.favourite)
        setFavourite(temp)
        console.log("Данные избранного",temp);
    }, [store.favourite]);

    const deleteFromFavourite = (id) => {
        store.MetodRemoveFavourite(id)
        setFavourite(store.favourite)
        // setFavourite(Favourite.filter(elem=>elem.id!==id))
    }
    
    

    return <>
    <Header/>
    {Favourite?.length!=0 ? 
    <div className="favourite">
    {Favourite.map((product)=>{
        return <Card card={product}/>
    })}
    </div> 
    : 
    <h1 style={{
        textAlign: "center",
        marginTop: "100px"
    }}>Вы не добавили ни одного товара</h1>
    }
    </>
}
