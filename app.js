var express = require( 'express' );
var morgan = require('morgan');
var app = express();


app.use(morgan('dev'))
app.listen(3000)
