import React, { Fragment, useEffect, useState } from 'react'
import { ObtenerProdutosMock, EliminarProductoMock } from '../Services/SistemaServices';
import Temporal from '../Components/Temporal'
import TablaProductos from '../Components/TablaProductos'
import Grafica from '../Components/Grafica'
import Swal from 'sweetalert2'
import { Link } from 'react-router-dom'

export default function ManagementPage() {

    const [ losProductos, setLosProductos ] = useState([]);
    const [ cargando, setCargando ] = useState(true);

    const obtenerProductos = async () => {
        const productos = await ObtenerProdutosMock();
        setLosProductos(productos);
        setCargando(false)
    }

    const EliminarProducto = (id) => {
        Swal.fire({
          icon: "danger",
          title: "¿ Estas seguro de eliminar este producto ?",
          showConfirmButton: true,
          confirmButtonText: "Si, Eliminar",
          showCancelButton: true,
        }).then(async (resultSwal) => {
          if(resultSwal.isDismissed === true){
            return;
          }
          setCargando(true);
          const productoEliminado = await EliminarProductoMock(id);
          obtenerProductos();
        });
      };

    useEffect(() => {
        obtenerProductos();
    }, [])

    return (
        <Fragment>
            {
                cargando ? (
                    <Temporal />
                ) : (
                    <div>
                        <h1>Detalle de Productos</h1>
                        <Link to="/management/create" className="btn btn-primary mt-2 mb-2" >Crear Producto</Link>
                        <TablaProductos productos={losProductos} EliminarProducto={EliminarProducto} />
                        <Grafica productos={losProductos}/>
                    </div>
                )
            }
        </Fragment>
    )
}
