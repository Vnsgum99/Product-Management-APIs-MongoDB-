const mongoose = require("mongoose");

const companySchema=mongoose.Schema({
    companyid : String,
    cname : String,
    productid :[{type:String}],
});
//                              collection name,
const companyModel= mongoose.model("fullstack",companySchema,"fullstack");
module.exports=companyModel;


