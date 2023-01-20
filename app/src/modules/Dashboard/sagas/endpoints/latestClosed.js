import axios from 'axios';

export const latestClosedGet = () => (
    axios.get('http://localhost:3001/latest-closed')
        .then((response) => {
            return response.data;
        })
        .catch((error) => error)
);