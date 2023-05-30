import {Router} from "express";
import { Todo } from "../models/models";

const router = Router()

const todos: Todo[]=[]

router.get("/", (req:any, res:any, next) => {
   res.status(200).json({todos})
   next("just testing my acess here now!!")
})  

router.post("/todos", (req:any, res:any, next) => {
   const receiveDates: Todo = {
      id:'1234567',
      title: req.body.title
   }

   //return res.status(200).json({receiveDates})

   todos.push(receiveDates)
})


export default router;