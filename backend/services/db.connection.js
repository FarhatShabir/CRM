const {DB_URL} =require("../config");
const mongooose=require("mongoose");

mongooose.set("strictQuery",true);
(function(){
    mongooose.connect(DB_URL);
    const db=mongooose.connection;
    db.on("error",()=>{console.log("error");})
    db.once("open",()=>{console.log("DataBase connected");})
})();