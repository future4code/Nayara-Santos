const express = require('express');
const server = express();
const data = require('./src/data.ts')

server.get('/data', (req, res) => {
    return res.json({data})
})

server.listen(3003, () => {
    console.log('Servidor está funcionando...')
})