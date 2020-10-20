import React from "react";
import FormCreateTrans from "../Components/FormCreateTrans";
import { CrearTransacMock } from "../Services/TransacServices";
import Swal from "sweetalert2";

export default function CreateTransPage() {
  const CrearTransaccion = async (objTransaccion) => {
    let peticion = await CrearTransacMock(objTransaccion);
    Swal.fire({
      title: "Transaccion Creado",
      text: "La transaccion ha sido registrado correcatamente",
      icon: "success",
      showConfirmButton: false,
      timer: 2000,
    });
  };

  return (
    <div>
      <h1>Registrar operacion</h1>
      <FormCreateTrans CrearTransaccion={CrearTransaccion} />
    </div>
  );
}
