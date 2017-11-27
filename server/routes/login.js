const express = require('express');
const route = express.Router()
const app = express();


route.get('/', function(req, res, next){
    res.render('login')
})
module.exports = route