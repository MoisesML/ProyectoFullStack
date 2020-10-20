import React, {useEffect, useState} from 'react'
import { ObtenerProductoIdMock, EditarProductoMock } from '../Services/SistemaServices'
import FormEdit from '../Components/FormEdit'
import { useHistory } from 'react-router-dom'
import Swal from 'sweetalert2';

export default function EditPage(props) {

  const [producto, setProducto] = useState({})
  const productoId = props.match.params.id;

  useEffect(async ()=>{
    let productoObtenido = await ObtenerProductoIdMock(productoId);
    setProducto(productoObtenido)
  },[])

  const history = useHistory();
  const EditarProducto = async (objProducto, id) => {
    let peticionEditar = await EditarProductoMock(objProducto, id)

    Swal.fire({
      icon:"success",
      title:"Exito!",
      text:"Producto Editado Exitosamente"
    });
      history.push('/management')
  }

  const CancelarEdicion = () => {
    Swal.fire({
      icon: "danger",
      title: "¿ Estas seguro de no editar el producto ?",
      showConfirmButton: true,
      confirmButtonText: "Si",
      showCancelButton: true,
    }).then(async (resultSwal) => {
      if (resultSwal.isDismissed === true) {
        return;
      };
    });
  };

  return (
    <div>
      <h1>Crear Producto</h1>
      <FormEdit producto={producto} EditarProducto={EditarProducto} CancelarEdicion={CancelarEdicion} />
    </div>
  )
} 