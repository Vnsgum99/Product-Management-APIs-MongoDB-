require("dotenv").config();

const { json } = require('express');
const express = require('express');
const app = express()
const router = express.Router();
router.use(express.json());//include json
const port = 5000;
const mongoose = require("mongoose");
const companymodel=require("../model/company");
//const companymodel=require("./company");





 mongoose.connect(process.env.MONGOURL)
.then( ()=> console.log("connected"));
app.get("/",(req,res)=> res.send("hello company"));
//Add product
router.post("/add", (req, res) => {
    const { newcompany } = req.body;
    companymodel.create(newcompany);

    return res.json({data : "company Added!"});
});
 
module.exports = router;
