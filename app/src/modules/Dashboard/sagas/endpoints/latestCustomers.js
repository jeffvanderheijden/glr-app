import axios from 'axios';

export const latestCustomersGet = () => (
    axios.get('http://localhost:3001/latest-customers')
        .then((response) => {
            return response.data;
        })
        .catch((error) => error)
);