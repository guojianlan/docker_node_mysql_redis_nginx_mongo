var express = require('express')
var app = express();
var config = require('config')
var mysql = require('mysql')
var connection = mysql.createConnection({
  host:'mysql',
  database: "users",
  user: "users_service",
  password: "12345678",
  port: 3306
});

connection.connect();
var mongoose = require('mongoose');
mongoose.connect('mongodb://mongo:27017/test', {
  useNewUrlParser: true,
  reconnectInterval: 1000,
}).then(resp => {
  console.log('connection');
}).catch(error => {
  console.log(error)
})
app.use((req, res) => {
  res.send('2222')
})
app.listen('8080', function () {
  console.log(1222);
})