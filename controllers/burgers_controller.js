var express = require('express');
var burger = require('../models/burger');

var router = express.Router();

router.get('/',(req, res)=>{
    burger.selectAll((data)=>{
        console.log(data); //Temp code
    });
    res.send("This is from the home contoller");
});

router.post("/api/burgers",(req,res)=>{
    var newBurger = req.body
    burger.insertOne(newBurger, (data)=>{
        console.log(data); //Temp code
    });
});

module.exports = router;