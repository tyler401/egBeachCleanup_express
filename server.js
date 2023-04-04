const express = require('express');
const app = express();
const port = 1337;
const publicPath = __dirname + '/public';

app.use(express.static(publicPath));
app.use('/css', express.static(publicPath + '/css'));
app.use('/images', express.static(publicPath + '/images'));
app.use('/js', express.static(publicPath + '/js'));

app.get('/', function(req, res) {
res.sendFile(publicPath + '/index.html');
});

app.get('/index', function(req, res) {
res.sendFile(publicPath + '/index.html');
});

app.get('/about', function(req, res) {
res.sendFile(publicPath + '/about.html');
});

app.get('/events', function(req, res) {
res.sendFile(publicPath + '/events.html');
});

app.get('/get-involved', function(req, res) {
res.sendFile(publicPath + '/get-involved.html');
});

app.get('/values', function(req, res) {
res.sendFile(publicPath + '/values.html');
});

app.get('*', function(req, res) {
res.sendFile(publicPath + '/404.html');
});

app.listen(port, function() {
console.log('Server running at http://localhost:${port}/');
});