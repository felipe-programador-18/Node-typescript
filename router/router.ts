import {Router} from "express";
import { Todo } from "../models/models";

const router = Router()

const todos:Todo[] =[]

router.get("/", (req:any, res:any, next) => {
   res.status(200).json({todos:todos})
   
})  

router.post("/todos", (req:any, res:any, next) => {
   const receiveDates: Todo = {
      id:'1234567',
      title: req.body.title
   }

   todos.push(receiveDates)

   res.status(201).json({message:"added with sucess", todos: todos})
})


router.put("/todos/edit",  (req:any,res:any, next) => {
   const get = req.params.todosId

    const findId = todos.findIndex(findId => findId.id === get)
    if(findId >= 0){
      todos[findId]= {id: todos[findId].id, title: req.body.title}
      res.status(200).json({message:"update todos id with success", todos:todos})
   }
    

    res.status(400).json({message:"could not find the todos byid"})

})

export default router;