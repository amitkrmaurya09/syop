import { Router } from "express";
import { userMiddleware } from "../../middleware/userMiddleware.js";


export const post = Router();
post.use('/*',userMiddleware)
post.get("/",async(req,res)=>{
    res.send("hii from the post")
})