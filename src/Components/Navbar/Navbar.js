import React from "react";
import logo from "../../assets/logoTienda.jpeg"
import CartWidget from '../CartWidget/CartWidget'

const viewport = {
    width: document.documentElement.clientWidth,
    height: document.documentElement.clientHeight
}

const Navbar = () =>{

    const categories = [
        {name:'Categoria 1', ref:'#', id:0},
        {name:'Categoria 2', ref:'#', id:1},
        {name:'Categoria 3', ref:'#', id:2}
    ];

    return (
        <header style={styles.container}>
            <img style={styles.imagen}src={logo} alt="" />
            <h1>Mi tienda online</h1>
            <nav>
                {categories.map((category)=> <a key={category.id} style={styles.anchors} href={category.ref}>{category.name}</a>)}
            </nav>
            <CartWidget />
        </header>
        )
}

const styles = {
    container: {
        display: viewport.width > 900 ? 'flex' : 'none',
        justifyContent : 'space-between',
        alignItems: 'center',  
    },
    imagen: {
        with: '10%',
    },
    anchors: {
        padding: 10
    },
} 

export default Navbar 
