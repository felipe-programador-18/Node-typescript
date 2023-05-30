import express, {Router} from  "express"
import todosTesting from "./router/router"

import bodyParser, { BodyParser } from "body-parser"

const app = express()
app.use(todosTesting)
app.use(bodyParser.json()) 


const port = 3000
app.listen(port)



