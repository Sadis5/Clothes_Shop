import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import Shop from "./components/pages/Shop/shop.jsx";
import Main from "./components/pages/main/main.jsx";
import Favourite from "./components/pages/Favourite/favourite.jsx";
import SingleProduct from "./components/pages/SingleProduct/SingleProduct.jsx";
import Cart from "./components/pages/Basket/cart.jsx";
import Login from "@/components/pages/LogIn/login.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/favourite" element={<Favourite />} />
        <Route path="/singleproduct/:id" element={<SingleProduct />} />
        <Route path="/basket" element={<Cart />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
