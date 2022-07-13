import React, { useState } from 'react'
import ListaUsuarios from './ListaUsuarios'

const Usuarios = () => {

  const [usuario, setUsuario] = useState('');
  const [usuarios, setUsuarios] = useState([])

  const manejarCambio = (event) => {
    setUsuario(event.target.value);
  }

  const manejarClick = () => {
    setUsuarios([...usuarios, usuario]);
  }

  const manejarBorrado = () => {
    setUsuarios([]);
  }

  return (
    <div>
      <input onChange={manejarCambio} type="text" />
      <button onClick={manejarClick}>Agregar</button>
      <ListaUsuarios usuarios={usuarios} manejarBorrado={manejarBorrado}/>
    </div>
  )
}

export default Usuarios
