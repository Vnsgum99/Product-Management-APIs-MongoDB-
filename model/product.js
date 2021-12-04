
const mongoose = require("mongoose");
//mongoose.pluralize(null);
const productSchema=mongoose.Schema({
    productid : String,
    title : String,
    price : String,
    category :[{type:String}],
    companyid : String,
    sellerid : [{type:String}],
   
});
//                              collection name,
const productModel= mongoose.model("fullstack",productSchema,"fullstack");
module.exports=productModel;








