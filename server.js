var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/debug.html');
 });
app.use(express.static('.'));

app.listen('3003');