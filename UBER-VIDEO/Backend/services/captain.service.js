const captainModel = require('../models/captain.model');

module.exports.createCaptain = async(data)=>{
  const {fullname,email,password,vehicle,} = data;
   if(!fullname || !email || !password || !vehicle){

       throw new Error('All fields are required');
   }
    const {firstname,lastname} = fullname;
    const {color,plate,capacity,vehicleType} = vehicle;

   const captain = await captainModel.create({
    fullname:{
        firstname,lastname
    },
    email,
    password,
    vehicle:{
        color,
        plate,
        capacity,
        vehicleType
    }

   });
    return captain;
}