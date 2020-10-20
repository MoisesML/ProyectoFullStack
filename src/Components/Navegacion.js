import React, { Fragment, useContext, useEffect } from "react";
import { AuthContext } from "../Context/AuthContext";
import { Nav, Navbar } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import Swal from "sweetalert2";
import { ObtenerUsuarioMock } from '../Services/UsuariosService'
import { salir } from "../Services/AuthService";
import "./css/Navegacion.css";

export default function Navegacion() {

  const { user, setAuthUser } = useContext(AuthContext);

  const history = useHistory();

  

  const logout = () => {
    Swal.fire({
      icon: "danger",
      title: "Desea salir?",
      showConfirmButton: true,
      confirmButtonText: "Si, Salir",
      showCancelButton: true,
    }).then((resultSwal) => {
      if (resultSwal.isDismissed === true) {
        return;
      }
      salir().then(() => {
        setAuthUser(null);
        Swal.fire({
          icon: "success",
          title: "Se deslogueo exitosamente",
          showConfirmButton: false,
          timer: 2000,
        }).then(() => {
          history.push("/");
        });
      });
    });
  };

  const Identificador = async () => {
    let usuarios = await ObtenerUsuarioMock()
  }

  // useEffect(() => {
  //   Identificador()
  // },[])
  // let id_userx = user;
  // .then(
  //   usuarios.map(
  //     ({ nombre_per, apellido_per, uid_per, id_per }, i) => (
  //         {uid_per == id_userx ? (
  //           <div key={i}>{nombre_per} {apellido_per}</div>
  //         ) : (
  //           <Fragment key={i} />
  //         )}
  //     )
  //   )
  // )

  return (
    <Fragment>
      {user !== null ? (
        <Navbar className="Navbar" bg="dark" variant="dark">
          <Navbar.Brand>EMPRESA SA</Navbar.Brand>
          <Nav className="mr-auto d-flex justify-items-between">
            <div>
            <Link className="Navegadores mr-2" to="/management">
              Cuadro General
            </Link>
            <Link className="Navegadores mr-2" to="/registro">
              Productos
            </Link>
            <Link className="Navegadores mr-2" to="/management/trans">
              Transacciones
            </Link>
            </div>
            <div>
              {/* <button className="btn btn-primary">
                {Identificador()}
              </button> */}
              <button
                className="btn btn-danger"
                onClick={() => {
                  logout();
                }}
              >
                Salir
              </button>
            </div>
          </Nav>
        </Navbar>
      ) : (
        <Navbar className="Navbar" bg="dark" variant="dark">
          <Navbar.Brand>EMPRESA SA</Navbar.Brand>
          <Nav className="mr-auto">
            <Link className="Navegadores mr-2" to="/">
              Ingresar
            </Link>
            <Link className="Navegadores mr-2" to="/registro">
              Registrarse
            </Link>
            <Link className="Navegadores mr-2" to="/contacto">
              Contactanos
            </Link>
          </Nav>
        </Navbar>
      )}
    </Fragment>
  );
}
