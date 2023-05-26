import express from  "express"
import todosRouters from "./router/router"

import { Todo } from "./models/models";


const todos: Todo = []=[];


const app = express()
app.use(todosRouters) 
const port = 3000

app.listen(port)



