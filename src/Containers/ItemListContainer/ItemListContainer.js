import React, { useEffect, useState } from 'react'
import CircularProgress from '@mui/material/CircularProgress';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';

export const ItemListContainer = ({ greeting }) => {

    const [products, setProducts] = useState([]);
    const [loaded, setLoaded] = useState(true);

    const { categoryId } = useParams();

    useEffect(() => {
        const URL = categoryId
            ? `https://fakestoreapi.com/products/category/${categoryId}`
            : 'https://fakestoreapi.com/products';
        fetch(URL)
            .then(res => res.json())
            .then(data => setProducts(data))
            .catch(err => console.log(err))
            .finally(() => setLoaded(false))
    }, [categoryId]);

    return (
        <>
            <h1>{greeting}</h1>
            {loaded ? <CircularProgress color="success" /> : <ItemList products={products} />}
        </>
    )
}


export default ItemListContainer


