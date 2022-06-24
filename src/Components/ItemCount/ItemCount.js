import React, { useState } from 'react'

const ItemCount = ({ initial, onAdd, stock }) => {

    const [count, setCount] = useState(initial);

    const handlerClickAdd = () => {
        if (count < stock) {
            setCount(count + 1);
        }
    }

    const handlerClickSubtrack = () => {
        if (count > 1) {
            setCount(count - 1);
        }
    }

    const handlerClickAddToCart = () => {
        onAdd(count);
    }

    return (
        <>
            <button onClick={() => handlerClickSubtrack()}>-</button>
            <h2>{count}</h2>
            <button onClick={() => handlerClickAdd()}>+</button>
            <button onClick={() => handlerClickAddToCart()}>Agregar al carrito</button>
        </>
    );
}

export default ItemCount
