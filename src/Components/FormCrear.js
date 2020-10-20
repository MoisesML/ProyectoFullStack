import React, { Fragment, useState } from "react";
import Swal from "sweetalert2";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";

export default function FormCrear({ CrearProducto, CancelarCreacion }) {
  let { register, handleSubmit, errors } = useForm();

  const history = useHistory();

  const manejarSubmit = (data) => {
    CrearProducto(data);
    return history.push("/management");
  };

  const manejarCancel = (e) => {
    e.preventDefault();
    CancelarCreacion();
    return history.push("/management");
  }

  return (
    <div className="mt-3 d-flex justify-content-center">
      <div className="col-sm-6 ">
        <h1 className="d-flex justify-content-center">Crear Producto</h1>
        <form onSubmit={handleSubmit(manejarSubmit)} className="mt-4 ">
          <div className="form-group row">
            <label className="col-sm-3">Categoria</label>
            <input
              type="text"
              className="form-control col-sm-8"
              name="categoria_prod"
              ref={register({ required: true })}
            ></input>
          </div>
          <div className="form-group row">
            <label className="col-sm-3">Descripción</label>
            <input
              type="text"
              className="form-control col-sm-8"
              name="nombre_prod"
              ref={register({ required: true })}
            ></input>
          </div>
          <div className="form-group row">
            <label className="col-sm-3">Stock</label>
            <input
              type="number"
              className="form-control col-sm-8"
              name="stock_prod"
              ref={register({ required: true })}
            ></input>
          </div>
          <div className="d-flex justify-content-center">
            <button className="btn btn-primary mr-3 ">Crear Producto</button>
            <button
              className="btn btn-danger ml-3"
              onClick={(e) => {
                manejarCancel(e);
              }}
            >
              Cancelar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
