import { useParams, useSearchParams } from "react-router-dom";
import Header from "../../layouts/header/header";
import { toJS } from "mobx";
import { Context } from "../../../main";
import React, { useEffect, useState, useRef, useContext } from "react";
import { Card } from "../../UI/card";
import "./SingleProduct.css";
import ProductService from "@/components/Services/product_service.js";

export default function SingleProduct() {
  const [activeColor, setActiveColor] = useState(0);
  const { id } = useParams("id");
  const [productData, setProductData] = useState(null);

  useEffect(() => {
    ProductService.getProductById(id).then((res) => {
      console.log(res);

      setProductData(res.data);
    });
  }, []);
  return (
    <>
      <Header />

      {productData ? (
        <main
          className="main-product container"
          style={{
            display: "flex",
            gap: "80px",
            justifyContent: "space-between",
            paddingTop: "50px",
          }}
        >
          <section
            className="product__images"
            style={{
              display: "flex",
              gap: "10px",
              flexDirection: "column",
              flexGrow: 1,
            }}
          >
            {productData?.colors[activeColor]?.color_img.map((item, index) => {
              return (
                <img
                  src={item}
                  key={index}
                  alt="product"
                  style={{
                    width: "100%",
                    objectFit: "cover",
                    objectPosition: "center",
                    cursor: "pointer",
                    border: "1px solid black",
                    margin: "10px",
                    borderRadius: "10px",
                    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.5)",
                    "&:hover": {
                      boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.5)",
                    },
                  }}
                />
              );
            })}
          </section>
          <section
            className="product__info"
            style={{
              width: "100%",
              maxWidth: "400px",
            }}
          >
            <h1>{productData?.name}</h1>
            <p>{productData?.description}</p>
            <p>{productData?.price}</p>
            <div>
              {productData?.colors.map((item, index) => {
                return (
                  <button
                    onClick={() => {
                      setActiveColor(index);
                    }}
                    style={{
                      width: "40px",
                      height: "40px",
                      background: item.color,
                      borderRadius: "50%",
                      cursor: "pointer",
                      border: "none",
                    }}
                  ></button>
                );
              })}
            </div>
            <button>Add to cart</button>
            <button>Add to favourite</button>
          </section>
        </main>
      ) : (
        <h1>Loading...</h1>
      )}
    </>
  );
}
