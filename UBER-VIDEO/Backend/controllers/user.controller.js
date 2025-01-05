const userModel = require('../models/user.model');
const userService = require('../services/user.service')
const {validationResult} = require('express-validator')
const blacklistTokenModel = require('../models/blacklistToken.model')

module.exports.registerUser = async(req,res,next)=>{
try{
 const errors = validationResult(req);

  if(!errors.isEmpty()){
    return res.status(401).json({errors: errors.array()});
  }
  
  const {fullname, email , password} = req.body;

  const isUserAlreadyExist = await userModel.findOne({email});

  if(isUserAlreadyExist){
    return res.status(400).json({message:"User already exist"});
  }

  const hashedpassword = await userModel.hashPassword(password);

  const user = await userService.createUser({
    firstname:fullname.firstname , lastname:fullname.lastname , email , password: hashedpassword
  });

  const token = user.generateAuthtoken()

  res.status(200).json({ token,user })
}
 catch(error){
   res.status(400).json({message:error.message});
 }
}

module.exports.loginUser = async(req,res,next)=>{
  const errors = validationResult(req);
  if(!errors.isEmpty()){
    return res.status(400).json({errors:errors.array()});
  }

  const {email,password} = req.body;
  const user = await userModel.findOne({email}).select('+password');

  if(!user){
    return res.status(401).json({message:"Invalid Email or Password"});
  }

  const isMatch = await user.comparePassword(password);

  if(!isMatch){
    return res.status(401).json({message:"Invalid Email or Password"});
  }

  const token = user.generateAuthtoken();
  res.cookie('token',token,{httpOnly:true});
  res.status(200).json({token,user})
  
}

module.exports.getUserProfile = async(req,res,next)=>{
  res.status(200).json(req.user);
}

module.exports.logoutUser = async(req,res,next)=>{
  try{
  const token = req.cookies.token || req.headers.authorization.split(' ')[1];

  if(!token){
    return res.status(401).json({message:'no token provided'});
  }
  const isBlacklisted = await userModel.findOne({token});
if(isBlacklisted){
  await blacklistTokenModel.create({token});
}
   res.clearCookie('token');
 return res.status(200).json({message:'Logged out successfully'})
  }catch(error){
    res.status(400).json({message:error.message});
  }
  
}