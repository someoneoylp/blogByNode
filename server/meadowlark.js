const express = require('express');
const path = require('path');
const app = express();
const login = require('./routes/login');
const index = require('./routes/index');

app.set('port', process.env.PORT || 3000);

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.use(express.static(__dirname+ '/public'))

app.use('/', index)
app.use('/login', login)

app.use(function(req, res){
    res.render('404')
})

app.use(function(err, req, res, next){
    console.error(err.stack)
    res.type('text/plain')
    res.status(500)
    res.send(' 500 - Server Error')
})

app.listen(app.get('port'), function(){
    console.log( 'Express started on http://localhost:' +
    app.get('port') + '; press Ctrl-C to terminate.' );
})