const express =  require("express");
const router = express.Router();
const Note = require("../models/noteModel");


router.route("/create").post((req,res)=>{
    const name =req.body.name;
    const email = req.body.email;
    const password=req.body.password;
    const phone=req.body.phone;
    const newNote = new Note({
        name,
        email,
        password,
        phone 
    });
    newNote.save();
})
module.exports=router