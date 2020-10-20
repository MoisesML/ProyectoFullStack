import React, { Fragment, useEffect, useState } from "react";
import {
  ObtenerTransacMock,
  ObtenerTrans1Mock,
  CrearTransacMock,
  AnularTransacMock,
} from "../Services/TransacServices";
import Temporal from "../Components/Temporal";
import TablaTransacciones from "../Components/TablaTransacciones";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

export default function TransManagPage() {
  const [lasTransac, setLasTransac] = useState([]);
  const [cargando, setCargando] = useState(true);

  const obtenerTransacciones = async () => {
    const transacciones = await ObtenerTransacMock();
    setLasTransac(transacciones);
    setCargando(false);
  };

  const AnularTransaccion = async (id) => {
    const datos = await ObtenerTrans1Mock(id);

    console.log(datos);
    Swal.fire({
      icon: "danger",
      title: "¿ Estas seguro de anular este movimiento ?",
      showConfirmButton: true,
      confirmButtonText: "Si, Eliminar",
      showCancelButton: true,
    }).then(async (resultSwal) => {
      if (resultSwal.isDismissed === true) {
        return;
      }
      setCargando(true);
      let objAnular = {
        id_trans: datos.id_trans,
        operacion_trans: datos.operacion_trans,
        destino_trans: datos.destino_trans,
        origen_trans: datos.origen_trans,
        cantidad_trans: datos.cantidad_trans,
        producto_trans: datos.producto_trans,
        status_trans: "Anulado",
        guia_trans: datos.guia_trans,
      };
      console.log(objAnular);
      const productoEliminado = await AnularTransacMock(objAnular, id);
      obtenerTransacciones();
    });
  };

  useEffect(() => {
    obtenerTransacciones();
  }, []);

  return (
    <Fragment>
      {cargando ? (
        <Temporal />
      ) : (
        <div>
          <h1>Detalle de Operaciones</h1>
          <Link
            className="btn btn-primary mt-2 mb-2"
            to="/management/transcreate"
          >
            Registrar operación
          </Link>
          <TablaTransacciones
            transacciones={lasTransac}
            AnularTransaccion={AnularTransaccion}
          />
        </div>
      )}
    </Fragment>
  );
}
