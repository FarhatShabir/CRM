//const CustomErrorHandler =require('../services/customErrorHandler')
const Purchase=require('../model/purchase.model');
const regex = require('../services/regex');

const purchase = {

 async   addPurchase(req,res,next){
    const exitstingPurchase=await Purchase.exists({vehicle_no:req.body.vehicle_no})
    if(exitstingPurchase){
    return res.status(403).json({message:"Vehicle Number Already Present"})
       // return next(CustomErrorHandler.alreadyExists(`Vehcle No. Already Exits`))
    }else{
    try {
        const newPurchase=new Purchase(req.body)
        await newPurchase.save()
        res.status(201).json({message:"Purchase Added sucessfully"})
    } catch (error) {
        res.status(409).json({message:error.message})
    }
}
},

   async viewPurchase(req,res){
    try{
        const purchaseList=await Purchase.find({})
        res.status(200).json({data:purchaseList})
    }
    catch(error){
          res.status(409).json({message:error.message})
      //  next(error)
    }
    },

   async deletePurchase(req,res){
        const carnumber=req.params.carno;  
        try {
            await Purchase.deleteOne({vehicle_no:carnumber}).then((data)=>{
            res.status(200).json({message:"Deleted Sucessfully"})
   })}catch (error) {
               return res.status(409).json({ message: error.message })
            }
        
    },


   async findPurchase(req,res){
        const carno=req.params.carno
        try {
            await Purchase.findOne({vehicle_no:carno}).then((doc)=>{
                res.json({data:doc})
            })
        } catch (error) {
            return res.status(409).json({ message: error.message })
        }
    },

   async updatePurchase(req,res){
    const carno=req.params.carno;
    const existingPurchase=await Purchase.exists({vehicle_no:req.body.vehicle_no})
     if(existingPurchase && carno!=req.body.vehicle_no){
      //  return next(CustomErrorHandler.alreadyExists(`Vehcle No ${req.body.vehicle_no} Already Exits`))
      return   res.status(409).json({message:"Vehicle Number Already Present"})
     }
    try {
       const updateStatus =await Purchase.updateOne({vehicle_no:carno},req.body)
       if(!updateStatus.modifiedCount){ 
        return res.status(200).json({message:"No Changes Made"})
       }else{
        res.status(200).json({message :"Updated Sucessfully"})
       }
       
    } catch (error) {
       res.status(500).json({message:"Something Went Wrong"})
    }
   },

    async findPurchase(req, res) {
        const carno = req.params.carno
        await Purchase.findOne({ vehicle_no: carno }).then((doc) => {
            res.json({ data: doc })
        }).catch((err) => {
            res.json({ message: err.message })
        })
    },

    async purchaseListDropDown(req,res,next){
        try {
            const data = await Purchase.find({}).select("vehicle_no -_id").limit(req.params.limit);
            if(data){
            return res.status(200).json({data});
            }
        }
        catch (error) {
            return next(error);
        }
    },
    async searchPurchaseListDropDown(req,res,next){
        try {
            const data = await Purchase.find({vehicle_no:{$regex:regex(req.body.query)}}).select("vehicle_no -_id").limit(10);
            if(data){
            return res.status(200).json({data});
            }
        }
        catch (error) {
            return next(error);
        }
    },
   
   async totalPurchase(req,res){
    try {
        const data=await Purchase.find({},{'vehicle_no':1,"purchase_date":1})        
        res.status(200).json({data:data})   
    } catch (error) {
        next(error)
    }
    },

    async searchVehicle(req,res){
        const vehicleNumber=req.query.q.toLowerCase();
        try{
            const data=await Purchase.find({vehicle_no:new RegExp(vehicleNumber)},{vehicle_no:1})
      
            res.status(200).json({data:data})
        }catch(error){
            res.status(error.status).json('error')
        }
    },

    async purchaseByPage(req,res,next){
        try {
            const limit=req.query.limit;
            const pageNo=req.query.pageno;
            const offset=limit*pageNo;
            const data=await Purchase.find({},{car_name:1,companyName:1,vehicle_no:1,seller_name:1,purchase_date:1}).skip(offset).limit(limit)
            res.status(200).json({data:data});   
        } catch (error) {
            next(error)
        }
    },
    async viewVehicle(req,res){
        try{
            console.log(req.params)
            const vehicle=await Purchase.findOne({vehicle_no:req.params.carno},{car_name:1,companyName:1,engine_no:1,color:1,fuel_type:1,condition:1,registrationYear:1,variant:1})
            res.status(200).json({data:vehicle})
        }catch(error){
            res.status(404).json({message:"Vehicle Not Found"})
        }
    }
}

module.exports = purchase;

