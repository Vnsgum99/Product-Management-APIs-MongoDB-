require("dotenv").config();

const { json } = require('express');
const express = require('express');
const app = express()
const router = express.Router();
router.use(express.json());//include json
const port = 5000;
const mongoose = require("mongoose");
const productModel = require("../model/product");

//const companymodel=require("./company");





 mongoose.connect(process.env.MONGOURL)
.then( ()=> console.log("connected"));
app.get("/",(req,res)=> res.send("hello product"));



//Add product
router.post("/add", (req, res) => {
    const { newproduct } = req.body;
    productModel.create(newproduct);

    return res.json({data : "product Added!"});
});
 

//Update product
router.put("/Change/:id", async (req, res) => {
    const ProductID = req.params.id;
    const category = req.body.Category;
    const UpdatedProduct = await productModel.findOneAndUpdate(
        {productid  : ProductID}
        ,{Category : category}
        ,{new : true}
    );

    console.log(JSON.stringify(UpdatedProduct));    
    return res.json({data : "Product's category updated!"});
});


//Delete product
router.delete("/Delete/:id", async (req, res) => {
    const id = req.params.id;

    const deletedProduct = await productModel.findOneAndDelete({ productid: id});
    console.log(JSON.stringify(deletedProduct));
    
    return res.json({data : `Product ${deletedProduct["title"]} deleted!`});
});

//List all product
router.get("/List", async (req, res) => {
    const productList = await productModel.find();

    if(productList.length === 0){
        return res.json({data : "No product found :(!"});
    }
    return res.json({data : productList});
});


//Companywise product
router.get("/Company/:id", async (req, res) => {
    const companyID = req.params.id;
    const ProductList = await productModel.find({companyid : companyID});
    return res.json({data : ProductList});
});

//Sellerwise product
router.get("/Seller/:id", async (req, res) => {
    const SellerID = req.params.id;
    const ProductList = await productModel.find({sellerid : SellerID});
    return res.json({data : ProductList});
});
module.exports = router;
