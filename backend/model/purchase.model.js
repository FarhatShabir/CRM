const mongoose=require("mongoose");

const purchaseSchema=new mongoose.Schema({
    //_id: String,
    condition: String,
    car_name: String,
    companyName: String,
    color: String,
    fuel_type: String,
    engine_no: String,
    vehicle_no: {type:String,unique:true},
    totalAmount: Number,
    paidAmount: Number,
    balanceAmount: Number,
    seller_name: String,
    email: String,
    phone_no: Number,
    address: String,
    postal_code: Number,
    purchase_date:Date,
    registration:String,
    purchaseAgrement:String,
    aadhar_card:String,
    pan_card:String,
    registrationYear:String,
    variant:String
   
})
const Purchase=mongoose.model("Purchase",purchaseSchema);
module.exports=Purchase