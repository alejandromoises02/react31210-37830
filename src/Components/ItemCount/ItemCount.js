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
        <div style={styles.container}>
            <div style={styles.containerButtons}>
                <button style={styles.button} onClick={() => handlerClickSubtrack()}>-</button>
                <h2>{count}</h2>
                <button style={styles.button} onClick={() => handlerClickAdd()}>+</button>
            </div>
            <button style={styles.buttonAdd} onClick={() => handlerClickAddToCart()}>Agregar al carrito</button>
        </div>
    );
}

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '10px'
    },
    button: {
        width: "40px",
        height: "40px",
        borderRadius: "50%",
        backgroundColor: "black",
        color: "white",
        fontSize: "20px",
        fontWeight: "bold",
        margin: "10px",
    },
    containerButtons: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    buttonAdd: {
        width: "30%",
        height: "50px",
        borderRadius: "50%",
        backgroundColor: "green",
        color: "white",
        fontSize: "20px",
        fontWeight: "bold",
    }

}

export default ItemCount
