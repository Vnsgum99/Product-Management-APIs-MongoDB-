
const mongoose = require("mongoose");
//mongoose.pluralize(null);
const sellerSchema=mongoose.Schema({
    sellerid : String,
    name : String,
    productid : [{type:String}]
    
   
});
//                              collection name,
const sellerModel= mongoose.model("fullstack",sellerSchema,"fullstack");
module.exports=sellerModel;











