const {Sale}=require("../../model");
const getSalesByPagination=async(req,res,next)=>{
    try {
        const data=await Sale.find({}).select("-_id").skip(req.body.skipdata).limit(req.params.limit);
        if(data.length){
            return res.status(200).json({data});
        }
        
    } catch (error) {
        return next(error);
    }
}
module.exports=getSalesByPagination;