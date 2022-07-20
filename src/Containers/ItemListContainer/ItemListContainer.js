import React, { useEffect, useState } from 'react'
import CircularProgress from '@mui/material/CircularProgress';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';
import { db } from "../../firebase/firebase";
import { getDocs, collection, query, where } from "firebase/firestore"

export const ItemListContainer = ({ greeting }) => {

    const [products, setProducts] = useState([]);
    const [loaded, setLoaded] = useState(true);
    const { categoryId } = useParams();

    useEffect(() => {

    const q = categoryId
        ? query(collection(db, 'productos'), where('category', '==', categoryId))
        : collection(db, 'productos');
        
    getDocs(q)
        .then(result => {
            const lista = result.docs.map(doc => {
                return {
                    id: doc.id,
                    ...doc.data(),
                }
            })
            setProducts(lista);
        })
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


