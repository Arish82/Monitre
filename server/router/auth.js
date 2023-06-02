const express=require("express")
const router=express.Router();
const User=require("../model/userSchema");
require("../db/conn")
const bcrypt = require('bcryptjs');
const jwt=require('jsonwebtoken');

router.post("/signup",async (req,res)=>{
    console.log(req.body);
    const {name, email, phone, password, cPassword}=req.body;
    if(!name || !email || !phone || !password || !cPassword){
        return res.status(422).json({message: "Make sure that the data sent in the request contains all valid fields and values beforehand."})
    }
    try{
        const userExist=await User.findOne({email});
        if(userExist){
            return res.status(422).json({message: "User already exists."})
        }
        else if(cPassword!=password){
            return res.status(422).json({message: "Password and confirm passwords are not same."})
        }

        const newUser= new User({name, email, phone, password, cPassword});
        const created=await newUser.save();

        if(created){
            return res.status(201).json({message: "User signup successfully"});
        }

        res.status(500).json({message: "Server failure"});

    }catch(err){
        console.log(err);
    }
})

router.post("/login",async (req,res)=>{
    const {email, password} = req.body;
    if(!email || !password){
        return res.status(422).json({message: "Make sure that the data sent in the request contains all valid fields and values beforehand."})
    }
    try{
        const userExist=await User.findOne({email});
        if(!userExist){
            return res.status(401).json({message: "Invalid Credentials"});
        }
        
        const match=await bcrypt.compare(password, userExist.password);
        
        if(!match){
            return res.status(401).json({message: "Invalid Credentials"});
        }

        const token=await userExist.generateWebToken();
        res.cookie('jwttoken',token,{
            httpOnly: true
        })

        res.status(201).json({message: "Login successful"});
    
    }catch(err){
        console.log(err);
    }

})


module.exports= router;