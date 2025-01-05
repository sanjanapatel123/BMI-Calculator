const captainModel = require('../models/captain.model');
const captainService = require('../services/captain.service');
const {validationResult} = require('express-validator');
const blacklistTokenModel = require('../models/blacklistToken.model');

module.exports.registerCaptain = async(req,res,next)=>{
   try{
     const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()});
    }
   
    const {fullname,email,password,vehicle} = req.body;


    const isCaptainAlreadyExist = await captainModel.findOne({email});

    if(isCaptainAlreadyExist){
        return res.status(400).json({message:"Captain already exist"});
    }

    const hashedpassword = await captainModel.hashPassword(password);

    const captain = await captainService.createCaptain({
         fullname: {
                firstname: fullname.firstname,
                lastname: fullname.lastname,
            },
            email,
            password: hashedpassword,
            vehicle: {
                color: vehicle.color,
                plate: vehicle.plate,
                capacity: vehicle.capacity,
                vehicleType: vehicle.vehicleType,
            },
    });

    const token = captain.generateAuthToken();

    res.status(200).json({token,captain});
}
catch(error){
    res.status(400).json({message:error.message});
}
}

module.exports.loginCaptain = async(req,res,next)=>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()});
    }

    const {email,password} = req.body;
    const captain = await captainModel.findOne({email}).select('+password');

    if(!captain){
        return res.status(401).json({message:"Invalid Email or Password"});
    }
    const isMatch = await captain.comparePassword(password);

    if(!isMatch){
        return res.status(401).json({message:"Invalid Email or Password"});
    }

    const token = captain.generateAuthToken();

    res.cookie('token',token);
    res.status(200).json({token,captain});
}

module.exports.getCaptainProfile = async(req,res,next)=>{
    res.status(200).json(req.captain);
}

module.exports.logoutCaptain = async(req,res,next)=>{
   try{
     const token = req.cookies?.token || req.headers.authorization?.split(' ')[1];
    if(!token){
        return res.status(400).json({message:"You are not logged in"});
    }
    const isBlacklisted = await captainModel.findOne({token});
    if(isBlacklisted){
        await blacklistTokenModel.create({token});
    }
    
    res.clearCookie('token');
    res.status(200).json({message:"Logout successfully"});
   }catch(error){
       res.status(400).json({message:error.message});
   }
}