const express = require('express');
//const router = express.Router();
//router.use(express.json());
//const mongoose = require("mongoose");
const app = express();
app.use(express.json());
const port = 5000;

const companytRoute = require("./router/company");
const sellerrouter=require("./router/seller");
const productrouter=require("./router/product");

app.use("/company", companytRoute);
app.use("/seller",sellerrouter);
app.use("/product",productrouter);


app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))






/* require("dotenv").config();

const { json } = require('express');
const express = require('express');
const app = express();
app.use(express.json());//include json
const port = 5000;
const mongoose = require("mongoose");
const companymodel=require("./model/company");





mongoose.connect(process.env.MONGOURL)
.then( ()=> console.log("connected"));
app.get("/",(req,res)=> res.send("hello mongooes"));



app.post("/add",(req,res)=>{
    const {newcompany}=req.body;
    //const addNewUser =userModel.create(newUser);
    companymodel.create(newcompany);
    return res.json({data: "registered sucessfully"});
});
    




 */


