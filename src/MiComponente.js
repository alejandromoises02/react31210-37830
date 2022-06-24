import React,{ useState, useEffect } from 'react'

const MiComponente = () => {

    const [contador, setContador] = useState(0);
    const [numero, setNumero] = useState(0);

    useEffect(() => {
        /*setTimeout(() => {
            setNumero(numero + 1); 
        }, 2000);*/
        /*const interval = setInterval(() => {
            console.log('intervalo');
        }, 1000);
        return () => {
           clearInterval(interval);
        }*/
    },[]);
    
    const handlerClickSumar = () =>{
        setContador(contador + 1);
    }

    const handlerClickQuitar = () =>{
        setContador(contador - 1);
    }

    const reset = () => {
        setContador(1);
    }

    return (
        <>
            <h1>{contador}</h1>
            <button onClick={handlerClickSumar}>click me agregar</button>
            <button onClick={handlerClickQuitar}>click me quitar</button>
            <button onClick={reset}>reset</button>
            <h1>{numero}</h1>
        </>
    );
}

export default MiComponente
