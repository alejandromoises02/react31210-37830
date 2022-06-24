import React, { useEffect, useState } from 'react'
import ItemCount from '../../Components/ItemCount/ItemCount'
import data  from '../../data'

export const ItemListContainer = ({ greeting }) => {

    const promesa = new Promise((res, rej) => {
        setTimeout(() => {
            res(data);
        }, 2000);
    });

    const [frutas, setFrutas] = useState([]);

    useEffect(() => {
        promesa.then(res => {
            setFrutas(res);
        }).catch(err => {
            console.log(err);
        });
    }, []);

    const onAdd = (count) => {
        console.log('recibi: ', count);
    }

    return (
        <>
            <h1>{greeting}</h1>
            <ItemCount initial={1} stock={5} onAdd={onAdd} />
            {frutas.map((fruta)=>{
                return <h1 key={fruta.id}>{fruta.name}</h1>
            })}
        </>
    )
}

export default ItemListContainer


