require("dotenv").config();

const { json } = require('express');
const express = require('express');
const app = express();
const router = express.Router();
router.use(express.json());//include json
const port = 5000;
const mongoose = require("mongoose");
const sellerModel = require("../model/seller");
const sellermodel=require("../model/seller");
//const companymodel=require("./company");





 mongoose.connect(process.env.MONGOURL)
.then( ()=> console.log("connected"));
app.get("/",(req,res)=> res.send("hello seller"));


//Add seller
router.post("/add", (req, res) => {
    const { newseller } = req.body;
    sellermodel.create(newseller);

    return res.json({data : "seller Added!"});
});


//Update seller
router.put("/Change/:id", async (req, res) => {
    const id = req.params.id;
    const product = req.body.product;

    const updatedSeller = await sellermodel.findOneAndUpdate(
        {sellerid : id}
        ,{productid : product}
        ,{new : true}
    );

    console.log(JSON.stringify(updatedSeller));
    return res.json({data : "Seller's product changed!"});
});
 


//Delete seller
router.delete("/Delete/:id", async (req, res) => {
    const id = req.params.id;
    const deletedSeller = await sellermodel.findOneAndDelete({sellerid : id});

    console.log(JSON.stringify(deletedSeller));
    return res.json({data : "Seller deleted!"});
});


//Seller list based on product name
router.get("/Product/:ProductName", async (req, res) => {
    const ProductName = req.params.ProductName;
    const ProductModel = require("../model/Product");
    const product = await productModel.findOne({Title : ProductName});

    if(product == null || product.lenght < 0){
        return res.json({data : "No product found :(!"});
    } else {
        const sellerList = await sellerModel.find({productid : product["ProductID"]});

        if(sellerList.length === 0){
            return res.json({data : "No seller found :(!"});
        }

        return res.json({data : sellerList});
    }
});



//List all seller
router.get("/List", async (req, res) => {
    const SellerList = await sellerModel.find();

    if(SellerList.length === 0){
        return res.json({data : "No seller found :(!"});
    }
    return res.json({data : SellerList});
});
module.exports = router;
