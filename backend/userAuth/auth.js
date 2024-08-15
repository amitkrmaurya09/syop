
import dotenv from 'dotenv';
import express from 'express';
import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'
import { PrismaClient } from '@prisma/client';

dotenv.config({path: "../.env"});

console.log(dotenv)



export const user = express.Router(); 

const prisma = new PrismaClient()


user.get("/me",(req,res)=>{

    res.send("hii there")
})

const saltRounds =10;
console.log("I reach here")


user.post("/signup",async(req,res)=>{

    try {

        const {username, email, password} = req.body;
        if(!username || !email || !password){
            res.json("all fields are required");
            return;
        }

        const user = await prisma.user.findUnique({
            where:{
                username:username,
                email:email
            }
        })

        if(user){
            res.json({error:"email or usename already exist"});
            return
        }
       const hashedPassword=  await bcrypt.hash(password, saltRounds);
       console.log("password is hashed",hashedPassword)

       
        const newUser = await prisma.user.create({
            data:{
                username:username,
            email:email,
            password:hashedPassword
        }
            })
            
        if(!newUser ){
            res.json("error during signup");
            return
        }


        var token = jwt.sign(newUser, process.env.JWT_SECRET);

        if(!token){
         const deletedUser =  await prisma.user.delete({
                where:{
                    username:user,
                    email:email
                }
            })
            console.log(deletedUser)
            res.json("failed to create token")
        }



        res.json({jwt: token})
        
    } catch (error) {
        console.log("an error occur while signup", error.message);
        res.status(404).json("failed to signup");
        return
    }
    
})



user.post("/signin",async(req,res)=>{

    try {
        const { email, password} = req.body;
        if( !email || !password){
            res.json("all fields are required");
            return;
        }

        const user = await prisma.user.findFirst({
            where:{
                email:email
            }
        })

        if(!user){
            res.status(400).json({error:"user doesn't exist"})
        }
        const result = await bcrypt.compare(password, user.password)
            
        if(result === false){
            res.status(400).json({msg: "password is incorrect"})
        }

           const token = jwt.sign(user, process.env.JWT_SECRET);

           res.json({jwt:token});
        
    } catch (error) {
        console.log("an error occur while signin", error.message);
        res.status(404).json("failed to signin");
        return
    }
})




