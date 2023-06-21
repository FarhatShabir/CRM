const {Sale}=require("../../model");
const regex = require("../../services/regex");
const getSalesByFilter=async(req,res,next)=>{
    try {
        const salesList=await Sale.find({vehicle_no:{$regex:regex(req.params.search)}}).select("vehicle_no -_id fullName solddate phone_no").limit(10);
    if(salesList)
    return res.status(200).json({data:salesList}); 
    } catch (error) {
        return next(error);
    }
}
module.exports=getSalesByFilter;