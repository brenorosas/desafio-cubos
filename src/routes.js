const express = require('express');
const routes = express.Router();

routes.get('/', (req, res) => {
    return res.json('HELLO CUBOS');
});
module.exports = routes;