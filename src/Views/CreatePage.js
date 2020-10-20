import React from "react"
import FormCrear from "../Components/FormCrear"
import { CrearProductoMock } from '../Services/SistemaServices'
import Swal from "sweetalert2"

export default function CreatePage() {
  const CrearProducto = async (objProducto) => {
    let peticion = await CrearProductoMock(objProducto);
    Swal.fire({
      title: "Producto Creado",
      text: "El producto ha sido creado correcatamente",
      icon: "success",
      showConfirmButton: false,
      timer: 2000,
    });
  };

  const CancelarCreacion = () => {
    Swal.fire({
      icon: "error",
      title: "¿ Estas seguro de no crear el producto ?",
      showConfirmButton: true,
      confirmButtonText: "Si",
      showCancelButton: true,
    }).then(async (resultSwal) => {
      if (resultSwal.isDismissed === true) {
        return;
      }
    });
  }

  return (
    <div>
      <FormCrear CrearProducto={CrearProducto} CancelarProducto={CancelarCreacion} />
    </div>
  );
}
