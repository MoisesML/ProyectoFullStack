import React, { Fragment, useState } from "react";
import Swal from "sweetalert2";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";

export default function FormCreateTrans({ CrearTransaccion }) {

  let { register, handleSubmit, errors } = useForm();

  const history = useHistory();

  const manejarSubmit = (data) => {
    CrearTransaccion({ ...data, status_trans: true });

    Swal.fire({
      icon: "success",
      title: "Transacción registrada correctamente",
      showConfirmButton: false,
      timer: 2000,
    });

    return history.push("/management/trans");
  };

  const CancelarCreacion = (e) => {
    e.preventDefault();

    Swal.fire({
      icon: "error",
      title: "¿ Estas seguro de no registrar la transacción ?",
      showConfirmButton: true,
      confirmButtonText: "Si",
      showCancelButton: true,
    }).then(async (resultSwal) => {
      if (resultSwal.isDismissed === true) {
        return;
      }
      history.push("/management/trans");
    });
  };

  return (
    <div className="mt-3 d-flex justify-content-center col-sm-6">
        <h1 className="d-flex justify-content-center">Crear Producto</h1>
        <form onSubmit={handleSubmit(manejarSubmit)} className="mt-4 ">
          <div className="form-group row">
            <label className="col-sm-3">Operación</label>
            <input
              type="text"
              className="form-control col-sm-8"
              name="operacion_trans"
              ref={register({ required: true })}
            >
              <datalist id="operacion_trans">
                <option value="Ingreso de productos" />
                <option value="Salida de productos" />
                <option value="Devolución de materiales" />
              </datalist>
            </input>
          </div>

          <div className="form-group row">
            <label className="col-sm-3">Destino</label>
            <input
              type="text"
              className="form-control col-sm-8"
              name="destino_trans"
              ref={register({ required: true })}
            ></input>
          </div>

          <div className="form-group row">
            <label className="col-sm-3">Origen</label>
            <input
              type="text"
              className="form-control col-sm-8"
              name="origen_trans"
              ref={register({ required: true })}
            ></input>
          </div>

          <div className="form-group row">
            <label className="col-sm-3">Producto</label>
            <input
              type="text"
              className="form-control col-sm-8"
              name="producto_trans"
              ref={register({ required: true })}
            ></input>
          </div>

          <div className="form-group row">
            <label className="col-sm-3">Cantidad</label>
            <input
              type="number"
              className="form-control col-sm-8"
              name="Cantidad"
              ref={register({ required: true })}
            ></input>
          </div>

          <div className="d-flex justify-content-center">
            <button className="btn btn-primary mr-3 ">Crear Producto</button>
            <button
              className="btn btn-danger ml-3"
              onClick={(e) => {
                CancelarCreacion(e);
              }}
            >
              Cancelar
            </button>
          </div>
        </form>
    </div>
  );
}
