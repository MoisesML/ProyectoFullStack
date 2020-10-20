import axios from 'axios'

const URL_PRODUCTOS='https://5f6a8d03d808b90016bc12c0.mockapi.io/Productos'

const ObtenerProdutosMock = async () => {
    try {
        let { data } = await axios.get(URL_PRODUCTOS);
        return data;
    } catch (error) {
        return error
    }
}

const ObtenerProductoIdMock = async (id_prod) => {
    try {
      let { data } = await axios.get(`${URL_PRODUCTOS}/${id_prod}`);
      return data;
    } catch (error) {
      return error;
    }
  };

const CrearProductoMock = async (producto) => {
    try {
        let headers = {
            "Content-Type":"application/json"
        };
        let { data } = await axios.post(URL_PRODUCTOS, producto, { headers });
        return data;
    } catch (error) {
        return error
    }
};

const EditarProductoMock = async (objProducto, id_prod) => {
    try {
      let headers = {
        "Content-Type": "application/json",
      };
      let { data } = await axios.put(`${URL_PRODUCTOS}/${id_prod}`, objProducto, { headers });
      return data;
    } catch (error) {
      return error;
    }
  };

const EliminarProductoMock = async (id_prod) => {
    try {
        let { data } = await axios.delete(`${URL_PRODUCTOS}/${id_prod}`);
        return data;
    } catch (error) {
        return error
    }
};

export { ObtenerProdutosMock, ObtenerProductoIdMock, CrearProductoMock, EditarProductoMock, EliminarProductoMock }