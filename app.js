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





