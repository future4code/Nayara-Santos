import express from "express";
import cors from "cors";


const app = express()

app.use(cors())
app.use(express.json())

app.listen(3003, () => console.log("Servidor disponivel em 3003"))

