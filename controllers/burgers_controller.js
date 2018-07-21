var express = require('express');
var router = express.Router();

var burger = require('../models/burger');

router.get('/',(req, res)=>{
    burger.selectAll((data)=>{
        res.json(data);//temp code
    });
});

router.post("/api/burgers",(req, res)=>{
    var newBurger = req.body;
    console.log(newBurger);
    burger.insertOne(newBurger, (data)=>{
        //Temp Code
        console.log(data);
        res.json(true);
    });
});

router.put("/api/burgers/:id", (req, res)=>{
    var updateBurger ={
        devoured: true,
        id:req.params.id
    }
    console.log(req.params.id);
    burger.updateOne(updateBurger, (data)=>{
        //Temp Code
        console.log(data);
        res.json(true);
    });
});

module.exports = router;