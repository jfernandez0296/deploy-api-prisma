import { PrismaClient } from "@prisma/client";
import jwt from "jsonwebtoken";


const prisma = new PrismaClient();

const user={
    username:"email@test.com",
    passwd:"secret_psswd"
}

export const generateToken=(req,res)=>{
  try {

   const {user}=req.body
   const token=jwt.sign(user,process.env.SECRET)
  } catch (error) {
    res.status(500).json({ error: true });
  }
}

//Middleware

export const login = async (req, res,next) => {
    const {username,passwd}=req.body
  try {

    if(username===user.username && passwd===user.passwd){
        console.log("login....")
        req.body.userValid=true
        //generate token
        next()
    }
    else{
        res.status(401)
    }
 
  } catch (error) {
    res.status(500).json({ error: true });
  }
};