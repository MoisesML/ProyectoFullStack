import React, { Fragment } from "react";
import {Link} from 'react-router-dom';

export default function ProductosTabla({ transacciones, AnularTransaccion}) {
  return (
    <Fragment>
      <table className="table">
        <thead>
          <tr>
            <th>Nº</th>
            <th>Operación</th>
            <th>Guía</th>
            <th>Origen</th>
            <th>Destino</th>
            <th>Producto</th>
            <th>Cantidad</th>
            <th>Status</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {transacciones.map(
            (
              {
                id_trans,
                operacion_trans,
                destino_trans,
                origen_trans,
                cantidad_trans,
                producto_trans,
                status_trans,
                guia_trans,
              },
              i
            ) => (
              <tr key={i}>
                <td>{id_trans}</td>
                <td>{operacion_trans}</td>
                <td>{guia_trans}</td>
                <td>{origen_trans}</td>
                <td>{destino_trans}</td>
                <td>{producto_trans}</td>
                <td>{cantidad_trans}</td>
                <td>{status_trans}</td>
                <td>
                  {/* <Link to={`/management/edit/${id_trans}`} className="btn btn-outline-info btn-sm mr-2">
                  <i className="fas fa-pen-alt"></i>
                  </Link> */}
                  <button className="btn btn-outline-danger btn-sm" onClick={()=>{AnularTransaccion(id_trans)}}>
                  <i className="fas fa-pen-alt"></i>
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