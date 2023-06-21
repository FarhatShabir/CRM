const {Sale}=require("../../model");

const totalSalesByDate= async (req,res,nex)=>{
    try {
       const salesWithDate= await Sale.find({},{vehicle_no:1,solddate:1})
       return res.status(200).json({data:salesWithDate})
    }catch(error){
        return next(new Error("Someting Went Wrong"))
    }
}

module.exports = totalSalesByDate;