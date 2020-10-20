import React, { Fragment } from "react";
import {Link} from 'react-router-dom';

export default function ProductosTabla({productos, EliminarProducto}) {
  return (
    <Fragment>
      <table className="table">
        <thead>
          <tr>
            <th>Nº</th>
            <th>Categoria</th>
            <th>Descripción</th>
            <th>Stock</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {productos.map(
            (
              {
                id_prod,
                nombre_prod,
                stock_prod,
                categoria_prod,
              },
              i
            ) => (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>{categoria_prod}</td>
                <td>{nombre_prod}</td>
                <td>{stock_prod}</td>
                <td>
                  <Link to={`/management/edit/${id_prod}`} className="btn btn-outline-info btn-sm mr-2">
                    <i className="fas fa-pen-alt"></i>
                  </Link>
                  <button className="btn btn-outline-danger btn-sm" onClick={()=>{EliminarProducto(id_prod)}}>
                  <i className="fas fa-trash"></i>
                  </button>
                </td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </Fragment>
  );
}