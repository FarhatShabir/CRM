const jwt = require("jsonwebtoken");
const {ACCESS_TOKEN_SECRET}=require("../config");
const {unAuthorized } = require("../services/customErrorHandler");
module.exports=(req,res,next)=>{
        const authHeader=req.headers['authorization'] 
        const token=authHeader && authHeader.split(' ')[1] 
        if (token==null){
             return next(unAuthorized("Token missing"))
        }
        jwt.verify(token,ACCESS_TOKEN_SECRET,(err,user)=>{
            if(err){
                console.log("invalid token called")
                 return next(unAuthorized("unAuthorized"))
            }
            // req.user=user//adds username/iat code to REQ
            next();
        })
    }