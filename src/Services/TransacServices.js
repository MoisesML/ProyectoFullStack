import axios from 'axios'

const URL_TRANSACCIONES='https://5f6a8d03d808b90016bc12c0.mockapi.io/Trans'

const ObtenerTransacMock = async () => {
    try {
        let { data } = await axios.get(URL_TRANSACCIONES);
        return data;
    } catch (error) {
        return error
    }
}

const ObtenerTrans1Mock = async (id) => {
    try {
        let { data } = await axios.get(`${URL_TRANSACCIONES}/${id}`);
        return data;
    } catch (error) {
        return error
    }
}

const CrearTransacMock = async (transaccion) => {
    try {
        let headers = {
            "Content-type":"application/json"
        };
        let { data } = await axios.post(URL_TRANSACCIONES, transaccion, { headers });
        return data;    
    } catch (error) {
        return error
    }
}

const AnularTransacMock = async (transaccion, guia_trans) => {
    try {
        let headers = {
            "Content-type":"application/json"
        };
        let { data } = await axios.put(`${URL_TRANSACCIONES}/${guia_trans}`, transaccion, { headers })
    } catch (error) {
        return error
    }
}

export { ObtenerTransacMock, ObtenerTrans1Mock, CrearTransacMock, AnularTransacMock }