import express, {Router} from  "express"
import todosTesting from "./router/router"

import bodyParser from "body-parser"

const app = express()
app.use(bodyParser.json()) 
app.use(todosTesting)

app.listen(3000)



