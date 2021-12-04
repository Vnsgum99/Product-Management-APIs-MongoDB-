const mongoose = require("mongoose");

const companySchema=mongoose.Schema({
    companyid : String,
    cname : String,
    productid :[{type:String}],
});
//                              collection name,
const companyModel= mongoose.model("fullstack",companySchema,"fullstack");
module.exports=companyModel;








/* /* ompany id : String
name : String
product ids : Array of String */

/* const compaines=[
    {
        cid=1,
        cname="abc",
        pid=["1","4"],
        
    },
    {
        cid="2",
        cname="paq",
        pid=["2","5"],
    },
    {
        cid="3",
        cname="xyz",
        pid=["3","6"],
    },
]
module.exports=compaines; */ 