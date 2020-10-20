import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";

export default function FormEdit({
  producto,
  EditarProducto,
  CancelarEdicion,
}) {

  let { register, handleSubmit, setValue, errors } = useForm();
  const history = useHistory();

  useEffect(() => {
    let { id_product, categoria_prod, nombre_prod, stock_prod } = producto;
    setValue("id_product", id_product);
    setValue("categoria_prod", categoria_prod);
    setValue("nombre_prod", nombre_prod);
    setValue("stock_prod", stock_prod);
  }, [producto]);

  const manejarSubmit = (data, id) => {
    EditarProducto(data, producto.id_prod);
  };

  const manejarCancel = (e) => {
    e.preventDefault();
    CancelarEdicion();
    return history.push("/management");
  }


  return (
    <form onSubmit={handleSubmit(manejarSubmit)}>
      <div className="form-group">
        <label htmlFor="categoria_prod">Categoria:</label>
        <input
          type="text"
          className="form-control"
          id="categoria_prod"
          name="categoria_prod"
          ref={register({ required: true })}
        />
        {errors.categoria_prod && errors.categoria_prod.type === "required" && (
          <small className="text-danger font-weight-bold">
            Categoria es requerido
          </small>
        )}
      </div>
      <div className="form-group">
        <label htmlFor="nombre_prod">Nombre:</label>
        <textarea
          className="form-control"
          id="nombre_prod"
          name="nombre_prod"
          ref={register({ required: true })}
        />
        {errors.nombre_prod && errors.nombre_prod.type === "required" && (
          <small className="text-danger font-weight-bold">
            Nombre es requerido
          </small>
        )}
      </div>
      <div className="form-group">
        <label htmlFor="stock_prod">Stock:</label>
        <input
          type="number"
          className="form-control"
          id="stock_prod"
          name="stock_prod"
          ref={register({ required: true, min: 1 })}
        />
        {errors.stock_prod && errors.stock_prod.type === "required" && (
          <small className="text-danger font-weight-bold">
            Stock es requerido
          </small>
        )}
        {errors.stock_prod && errors.stock_prod.type === "min" && (
          <small className="text-danger font-weight-bold">
            No puede ser menor a 0
          </small>
        )}
      </div>
      <button type="submit" className="btn btn-primary">
        Editar Producto
      </button>
      <button onClick={(e) => {manejarCancel(e)}} className="btn btn-danger">Cancelar</button>
    </form>
  );
}
