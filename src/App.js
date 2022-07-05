import React from "react";
import './App.css';
import Navbar from "./Components/Navbar/Navbar"
import ItemListContainer from './Containers/ItemListContainer/ItemListContainer'
import ItemDetailsContainer from './Containers/ItemDetailsContainer/ItemDetailsContainer'
import Cart from './Components/Cart/Cart'

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

const App = () => {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<ItemListContainer greeting='Bienvenido'/>} />
        <Route path="/category/:categoryId" element={<ItemListContainer greeting='Bienvenido'/>}/>
        <Route path="/product/:productId" element={<ItemDetailsContainer />}/>
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App



