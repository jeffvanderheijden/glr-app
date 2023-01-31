import axios from 'axios';

export const tokenAuth = (requestParams) => {
    console.log(requestParams)
    return axios.post('http://localhost:3001/auth/token', requestParams)
        .then((response) => response.data)
        .catch((error) => error)
}