import express from  "express"
import todosTesting from "./router/router"

import bodyParser from "body-parser"

const app = express()
app.use(bodyParser.json()) 

const Getrouter = require("./router/router")

app.use(todosTesting)
app.use(Getrouter)

app.listen(3000)



