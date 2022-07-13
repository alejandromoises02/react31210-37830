import React from 'react'

const MiComponente = () => {

    const manejarClick = (event) => {
       //console.dir(event.target);
       //event.target.disabled = true;
       //const button = document.getElementById('button');
       //console.log(event.target === button);
       console.log("click en boton");
       event.stopPropagation();
    }

    const manejarCambio = (event) => {
        console.dir(event.target);
    }

    const prevenido = (event) => {
        console.log("prevenido");
        event.preventDefault()
    }

    const manejarClickDiv = () => {
        console.log("click en div");
    }

    return (
        <div onClick={manejarClickDiv}>
            <button id="button" onClick={manejarClick}>Click</button>
            <input type="text" onKeyDown={prevenido} onChange={manejarCambio}/>
            <a onClick={prevenido} href='http://google.com'>Ir a google</a>
        </div>
    );
}

export default MiComponente
