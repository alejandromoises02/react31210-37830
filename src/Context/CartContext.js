import React, { createContext, useState, useEffect } from 'react'

export const cartContext = createContext();
const { Provider } = cartContext;

const CartCustomProvider = ({ children }) => {

    const [products, setProducts] = useState([]);
    const [qtyProducts, setQtyProducts] = useState(0);

    const getQtyProducts = () => {
        
    }

    useEffect(() => {
        getQtyProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [products])


    const addProduct = (product) => {
        
    }

    const deleteProduct = (id) => {
    };

    const isInCart = (id) => {
    };

    const clear = () => {
        setProducts([]);
    }

    return (
        <Provider value={{ products, addProduct, deleteProduct, clear, qtyProducts }}>
            {children}
        </Provider>
    )
}

export default CartCustomProvider

