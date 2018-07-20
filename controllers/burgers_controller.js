var express = require('express');
var burger = require('../models/burger');

var router = express.Router();

//Temp code
router.get('/',(req, res)=>{
    res.send("This is from the home contoller");
});

module.exports = router;