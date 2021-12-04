
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








/* const products=[
    {
        pid="1",
        title="pen",
        price="100",
        category=["stationary","signing","school"],
        cid="1",
        sid=["1","2"]
       

    },
    {
        pid="2",
        title="zamba shoes",
        price="100",
        category=["men shoes","running","dancing"],
        cid="2",
        sid=["1","2"]
    },
    {
        pid="3",
        title="x5 fulsion",
        price="100",
        category=["watch","digital watch"],
        cid="3",
        sid=["1","2"]
    },
    {
        pid="4",
        title="7-plug box",
        price="100",
        category=["electrical ","wooden","woodenfiber"],
        cid="1",
        sid=["1","2"]
    },
    {
        pid="5",
        title="parle g",
        price="100",
        category=["bicsuit","sweet bisuit"],
        cid="2",
        sid=["1","2"]
    },
    {
        pid="6",
        title="wasten pents",
        price="100",
        category=["cloths","winter cloths","wedding cloths"],
        cid="3",
        sid=["1","2"]
    },
]
module.exports=products; */