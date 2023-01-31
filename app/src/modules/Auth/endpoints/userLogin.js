import axios from 'axios';

export const userLogin = (requestParams) => {
    return axios.post('http://localhost:3001/auth/login', requestParams)
        .then((response) => response.data)
        .catch((error) => error)
}