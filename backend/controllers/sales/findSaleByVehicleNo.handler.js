const {Sale}=require("../../model");
const findSaleByVehicleNo=async(req,res,next)=>{
    try {
    const data=await Sale.findOne({vehicle_no:req.params.id}).select("-_id");
    if(data){
        return res.status(200).json({data});
    } 
    } catch (error) {
      return next(error);  
    }
}
module.exports=findSaleByVehicleNo;