import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import {  CrearPropietario } from './CrearPropietario'
import { ListaPropietarios } from './ListaPropietarios'

export const Menu = (props) => {

  const [option, setOption] = useState("");
  //const [reg.setReg] = useState ("");
  //const [list.setList] = useState ("");
  

  function OnClickRegistrar(){
    setOption("CrearPropietario")
  }

  function OnClickListar(){
    setOption("ListaPropietarios")
  }

  function cerrarSesion(){
    document.getElementById("caja_menu").style.display = "none";
    document.getElementById("form_login").style.display = "block";
    document.getElementById("txtusu").value = "";
    document.getElementById("txtpass").value = "";
    document.getElementById("txtusu").focus();
  }

  return (
    <>
    <div id="caja_menu" style={{textAlign:"left"}}>
        <strong className='h3'>
          Bienvenido Usuario : {props.usuario.toUpperCase()}
        </strong>

        <nav className='navbar navbar-expand-lg navbar-light bg-light'>
          <div className='container-fluid'>
            <label className='navbar-brand h4'>Menú Principal</label>
            <button className="navbar-toggler" 
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target="#navbarNavAltMarkup" 
                    aria-controls="navbarNavAltMarkup"
                    aria-expanded="false"
                    aria-label="Toggle Navigation">
                  <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <NavLink className="nav-link h5 text-center" onClick={OnClickRegistrar}>Registrar Propietario</NavLink>
                <NavLink className="nav-link h5 text-center" onClick={OnClickListar}>Listar Propietarios</NavLink>
                <a className="nav-link h5 text-center" style={{color:"blue"}} href=" " onClick={cerrarSesion}>Cerrar Sesión</a>
              </div>
            </div>
          </div>
        </nav>
    </div>
    
    <br/>

    { option === "CrearPropietario" && <CrearPropietario/> }
    { option === "ListaPropietarios" && <ListaPropietarios/> }

    </>
  )
}