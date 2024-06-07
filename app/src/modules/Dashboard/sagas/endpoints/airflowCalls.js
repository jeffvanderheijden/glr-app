import axios from 'axios';

export const airflowCallsGet = () => {
    let start = new Date();
    start.setHours(0,0,0,0);
    start = start.getTime() / 1000

    let end = new Date();
    end.setHours(23,59,59,999);
    end = end.getTime() / 1000;

    const requestParams = {
        params: {
            from: Math.ceil(start),
            to: Math.ceil(end)
        }
    }
    return axios.get('http://localhost:3001/airflow-calls', requestParams)
        .then((response) => response.data)
        .catch((error) => error)
};