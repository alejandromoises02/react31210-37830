import React from "react";
import Navbar from "./Components/Navbar/Navbar"
import ItemListContainer from './Containers/ItemListContainer/ItemListContainer'

const App = () => {

  return (
    <>
      <Navbar />
      <ItemListContainer greeting='Fruteria Online'/>
    </>
  )
}

export default App



