import express from "express";
import cors from "cors";


const app = express()

app.get('/', (request, response) => {
    response.json({hello: 'world'})
})

app.listen(3003)