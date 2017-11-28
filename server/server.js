const express = require('express')
const path = require('path')
const morgan = require('morgan')
const bodyParser = require('body-parser')
// const router = require('./router/router.js')
// const db = require('../database/dbconfig.js')

const app = express();
let port = process.env.PORT || 3030;
const ip = 'localhost';

app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname,'../client/static')))
//app.use('/api', router)

app.listen(port, ip, function(){
	console.log("server is listening on port " + port)
})

module.exports = app;