const express = require('express');
const app = express();
const port = 3001;
const axios = require('axios');

// CORS 
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

app.get('/airflow-users', (req, res) => {
    axios.get('https://api.aircall.io/v1/users', airflowAuth)
        .then((response) => {
            res.send(response.data.users)
        })
        .catch((error) => {
            console.log(error);
            res.send(error);
        })
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})