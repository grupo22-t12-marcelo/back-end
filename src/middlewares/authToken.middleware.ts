import "dotenv/config";
import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";


const authTokenMiddleware =async (req: Request, res: Response, next: NextFunction) => {
    
    let token = req.headers.authorization

    if(!token){
        return res.status(401).json({
            message: "Token invalido"
        })
    }

    token = token.split(" ")[1];

    jwt.verify(token, process.env.SECRET_KEY as string, (error:any, decoded:any)=>{
        if(error){
            return res.status(401).json({
                message: "Token invalido"
            })
        }

        req.user = {
            id: decoded.idToken,
        }
    })
    next()

}

export default authTokenMiddleware;