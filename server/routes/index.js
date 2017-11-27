const express = require('express');
const route = express.Router()
const app = express();


route.get('/', function(req, res, next){
    res.render('index')
})
module.exports = route