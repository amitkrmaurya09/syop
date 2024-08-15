

import dotenv from "dotenv"
import jwt from "jsonwebtoken"
dotenv.config({path: "../.env"})

export const userMiddleware = async(req, res,next)=>{
    try {
            const token = req.get("Authorization")
        
            // Verify the token and cast the result to the custom payload type
            console.log(token)
            

            const user = await jwt.verify(token, process.env.JWT_SECRET) ;
            console.log("i am the user",user)
        
            // If user is verified, set the userId in the context and proceed
            if (user && user.id) {
              req.userId =user.id
              await next();
            } else {
                c.status(403);
                res.json({ message: "You are not logged in, invalid token" });
                return
            }
        
    } catch (error) {
        console.log("an error occured while in the middleware", error);
        res.json({error:"error in middleware"})
        return;
    }
}