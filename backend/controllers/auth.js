import { db } from "../connect.js"
import bcrypt from "bcrypt"

export const register = (req,res) =>{
    

    //CHECK USER IF EXISTS

    const q = "SELECT FROM users WHERE username = ?"

    db.query(q,[req.body.username],(err,data)=>{
        if(err) return res.status(500).json(err)
        if(data.length) res.status(409).json("user already exists")
    })

    //CREATE A NEW USER
        //Hash the password
        const salt = bcrypt.gensaltSync(10);
        const hashedpassword = bcrypt.hashSync(req.body.password, salt)
     
}


export const login = (req,res) =>{


}


export const logout = (req,res) =>{
    
}