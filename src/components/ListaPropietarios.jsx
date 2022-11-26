import React, { useState, useEffect } from 'react'
import TextField from "@mui/material/TextField"
import axios from "axios"
import Table from "react-bootstrap/Table"
import { FilaPropietarios } from "./FilaPropietarios"
import { EditarPropietarios} from "./EditarPropietarios"

export const ListaPropietarios = () => {

  const [showModal, setShowModal] = useState(false);
  const [propietarios, setPropietarios] = useState([]);
  const [inputText, setInputText] = useState("");

  useEffect( ()=> {

    if (inputText !== "")
    {
      axios
      .get("http://127.0.0.1:4000/APIRESTCICLO4A/busqueda-estudiante/"+inputText)
      .then((res) =>{
        setPropietarios(res.data);
      })
      .catch((error) =>{
        alert("Ocurrio un error con la busqueda");
        console.log(error);
      });
    }
    else{

      axios
      .get("http://127.0.0.1:4000/APIRESTCICLO4A/listar-estudiantes")
      .then((res) =>{
        setPropietarios(res.data);
      })
      .catch((error)=>{
        alert("Ocurrio un Error listando los estudiantes");
        console.log(error);
      });
    }

    
  } , [inputText]);

  let inputHandler = (e) =>{
    console.log(e.key)
    
    if (e.key === "Enter")
    {
      let lowerCase = e.target.value.toLowerCase();
      setInputText(lowerCase);
    }
    
  }

  function dataTable(){
    return propietarios.map((res) => {
      return <FilaPropietarios handleOpenModal={handleOpen} obj={res}></FilaPropietarios>
    })
  }

  function handleOpen(){
    setShowModal(true)
  }
  function handleClose(){
    setShowModal(false)
  }

  return (
    <div className="table-wrapper">
      <div className="search">
        <TextField 
          id="outlined-basic" 
          label="Search" 
          variant="outlined"
          //onChange={inputHandler}
          onKeyDown={inputHandler}
          fullWidth />
      </div>
      <br/>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Correo</th>
            <th>Cedula</th>
            <th>Apto</th>
            <th>Observacion</th>
          </tr>
        </thead>
        <tbody>{dataTable()}</tbody>
      </Table>
      {showModal && <EditarPropietarios handleC={handleClose}/> }
    </div>
  )
}