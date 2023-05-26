import {Router} from "express";

const router = Router()

router.get("/", (req, res, next) => {
   res.send("server its running now")
   next("just testing my acess here now!!")
})  

export default router;