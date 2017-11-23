const express = require('express');
const path = require('path');
const app = express();

// 如果设置了环境变量就使用环境变量，否则就使用3000
// PORT =8080 node app.js
app.set('port', process.env.PORT || 3000);

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.use(express.static(__dirname+ '/public'))

let message = {
    name: 'oylp',
}

app.get('/', function(req, res, next){
    res.render('index', {name: message})
})

app.get('/about', function(req, res, next){
    res.send('about')
})

// app.use('/', index)

// app.use添加中间件的一种方法
// 可以看做处理所有没有路由匹配路径的处理器
// app.use：挂载中间件方法到路径上，如果路径没有设置，对于每个请求，这个中间件都会执行
app.use(function(req, res){
    res.type('text/plain')
    res.status(404)
    res.send('404 - not found')
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