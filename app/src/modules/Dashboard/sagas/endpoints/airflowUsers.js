import axios from 'axios';

export const airflowUsersGet = () => (
    axios.get('http://localhost:3001/airflow-users')
        .then((response) => {
            // Filter out unwanted users (Marylisa, Laurits)
            return response.data.filter(user => ![501331, 530705].includes(user.id));
        })
        .catch((error) => error)
);