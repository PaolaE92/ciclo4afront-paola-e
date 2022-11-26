import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'
import { EditarPropietarios } from "./EditarPropietarios"

export const FilaPropietario = (props) => {

  function borrarPropietario(){
    alert("Propietario a eliminar");
    // Aqui se debe implementar el llamado a eliminar estudiante en API REST
  }

  function EditarPropietarios(e){
    e.preventDefault();
    props.handleOpenModal();
  }

  return (
    <>
    <tr>
        <td>{props.obj.nombre}</td>
        <td>{props.obj.email}</td>
        <td>{props.obj.cedula}</td>
        <td>{props.obj.Apto}</td>
        <td>
            <Link className="edit-link" onClick={EditarPropietarios} >Editar</Link>
            &nbsp;
            <Button onClick={borrarPropietario} size="sm" variant="danger">Borrar</Button>
        </td>
    </tr>

    </>
  )
}