const userModel = require('../models/user.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const blacklistTokenModel = require('../models/blacklistToken.model');
const captainModel = require('../models/captain.model');

module.exports.authUser = async(req,res,next)=>{ 
 const token = req.cookies.token || (req.headers.authorization?.split(' ')[1]);
    if(!token){
    return res.status(401).json({message:"Unauthorized Access : No Token Provided"});
    }
    const isBlacklisted = await userModel.findOne({token:token});

    if(isBlacklisted){
        return res.status(401).json({message:"Unauthorized Access : black"});
    }
    try{
        const decoded = jwt.verify(token,process.env.JWT_SECRET);
        const user = await userModel.findById(decoded.id);
        if(!user){
            return res.status(401).json({message:"Unauthorized Access : user not found"});
        }
        req.user = user;
        return next();
        
        }catch(err){
            return res.status(401).json({message:"Unauthorized Access : Invalid Token"});
        }
}

module.exports.authCaptain = async(req,res,next)=>{
    const token = req.cookies.token || req.headers.authorization?.split(' ')[1];

    if(!token){
        return res.status(401).json({message:"Unauthorized Access token not found"});
    }

    const isBlacklisted = await blacklistTokenModel.findOne({token:token});

    if(isBlacklisted){
        return res.status(401).json({message:"Unauthorized Access : Blacklisted Token"});
    }

    try{
        const decoded = jwt.verify(token,process.env.JWT_SECRET);
        const captain = await captainModel.findById(decoded._id);
        if(!captain){
            return res.status(401).json({message:"Unauthorized Access : Captain not found"});
        }
        req.captain = captain;
        return next();
    }catch(err){
        console.log(err);
       res.status(401).json({message:"Unauthorized Access : Invalid Token"});
    }
}