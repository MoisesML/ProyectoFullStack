import axios from 'axios'

const URL_USUARIOS='https://5f6a8d03d808b90016bc12c0.mockapi.io/Usuarios'

const ObtenerUsuarioMock = async () => {
    try {
        let { data } = await axios.get(URL_USUARIOS);
        return data
    } catch (error) {
        return error 
    }
}

export { ObtenerUsuarioMock }