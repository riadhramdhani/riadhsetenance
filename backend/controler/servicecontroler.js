const Service= require("../models/service");
const User = require("../models/user")

exports.addService= async(req,res)=>{
    // const { profession } = req.body;
    const { userId,title, img_url, vedio_url ,phone_number,adresse,description} = req.body;
    
    try {

        // const { userId, serviceData } = req.body;

      // Vérifier si l'utilisateur existe et sa profession est "Worker"
    //   const user = await User.findById(userId);
    //   if (!user) {
    //     return res.status(404).json({ message: 'User not found' });
    //   }

    //   if (user.profession !== 'worker') {
    //     return res.status(403).json({ message: 'User is not a worker' });
    //   }
        // if (profession === 'worker'){
        const service= new Service({title,img_url,vedio_url,phone_number,adresse,description,userId:req.user.id});
        await service.save()
        res.status(201).send({msg:"service created with success",service})
    // }
        // else {
        //     res.status(403).json({ message: 'Unauthorized' });}
        
    } catch (error) {
        res.status(500).send({msg:"server error"})
        
    }

}
exports.getAllservice = async(req,res)=>{
    try { const services = await Service.find().populate("userId",["username"]);
    res.status(200).json({msg:"allservice",services})
        
    } catch (error) {
        res.status(500).send({msg:"server error"})
    }
}
exports.deleteservice = async(req,res)=>{
    const{id}=req.params
    try { await Service.findByIdAndDelete(id)
    res.status(200).json({msg:"service deleted"})
        
    }
     catch (error) {
        res.status(500).send({msg:"server error"})
    }
}
exports.updateservice = async(req,res)=>{

    const{id}=req.params
    try { const serviceupdate = await Service.findByIdAndUpdate(id,{$set:{...req.body}},{new:true})
    res.status(200).json({msg:"service updated",serviceupdate})
        
    } catch (error) {
        res.status(500).send({msg:"server error"})
    }
}
exports.getoneservice = async(req,res)=>{
    const{id}=req.params
    try {
    const service =  await Service.findById(id).populate("userId",["username"])
    res.status(200).send({msg:"service found",service})
    } catch (error) {
        res.status(500).send({msg:"server error"})
    }
}