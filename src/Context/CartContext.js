import React, { createContext, useState, useEffect } from 'react'

export const cartContext = createContext();
const { Provider } = cartContext;

const CartCustomProvider = ({ children }) => {

    const [products, setProducts] = useState([]);
    const [qtyProducts, setQtyProducts] = useState(0);

    const getQtyProducts = () => {
        let qty = 0;
        products.forEach(product => qty += product.qty);
        setQtyProducts(qty);
    }

    useEffect(() => {
        getQtyProducts();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [products])

    const addProduct = (product) => {
        if (isInCart(product.id)) {
            const found = products.find(p => p.id === product.id);
            const index = products.indexOf(found);
            const aux = [...products];
            aux[index].qty += product.qty;
            setProducts(aux);
        } else {
            setProducts([...products, product]);
        };
    }

    const deleteProduct = (id) => {
        setProducts(products.filter(product => product.id !== id));
    };

    const isInCart = (id) => {
        return products.some(products => products.id === id);
    };

    const clear = () => {
        setProducts([]);
        setQtyProducts(0);
    }

    return (
        <Provider value={{ products, addProduct, deleteProduct, clear, qtyProducts }}>
            {children}
        </Provider>
    )
}

export default CartCustomProvider

