const User = require("../models/userModel.js");
const mongoose = require("mongoose");

const addUser = async(req,res) => {
    try{
        const { name, email, password } = req.body;
        if(!name, !email, !password){
            res.json({message: "Invalid Credentials"});
        }
        const newUser = new User({
            name,
            email,
            password
        });
        await newUser.save();
        res.json({ message: "User added Successfully", data: newUser });
    }catch(err){
        console.error(err.message);
    }
};

const getUser = async(req,res) =>{
    try{
        const Users = await User.find();
        if(!Users){
            res.json({message: "No User found"});
        }
        res.json(Users);
    }catch(err){
        console.error(err.message);
    }
}

const updateUser = async(req,res)=>{
    const { id } = req.params;
    const { email, password } = req.body;
    if(!email, !password){
        res.json({message: "Invalid Credentials"});
    }
    try{
       if(!email){
        res.json({ message:"Email not found" });
       }
       const newPassword = password
       const updatedData = await User.findByIdAndUpdate(id, newPassword, {
        new: true
       });
       await updatedData.save();
       res.json({message: "Data updated successfully"});
    }catch(err){
        console.error(err.message);
    }
};

const deleteUser = async(req,res) => {
  const { email } = req.body;
    if(!email){
    res.json({message: "Email  not found"});
    }
  const foundUser = await User.findOne({email});
  if (!foundUser) {
    return res.json({ message: "User not found" });
  }
  const deletedUser = await User.deleteOne({ email });
  res.json({message: "User Deleted", data: deletedUser});
    }

const controllers = {
    getUser,
    addUser,
    updateUser,
    deleteUser
};

module.exports = controllers;