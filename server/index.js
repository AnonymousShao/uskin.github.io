//using es6 in client js files
require('babel-core/register')({
  ignore: ['node_modules', 'server', 'configs', 'views']
});

var express = require('express');
var app = express();
var path = require('path');

//static file
app.use('/client/dist', express.static(path.resolve(__dirname, '../client/dist')));
app.use('/client/image', express.static(path.resolve(__dirname, '../client/image')));

//router
app.get('*', function (req, res) {
  // res.render('index', obj); // ejs files
  // app.set('views', pwd/); // ejs folder

  res.sendFile(path.join(__dirname, '../index.html'));
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
