var express = require('express');
var router = express.Router();
var movieBank = require('../movieBank');
var bodyParser = require('body-parser')

module.exports = function (io) {
  router.get('/', function (req, res) {
    var movies = movieBank.list();
    res.render( 'index.html', { movies: movies} );
  });


  router.get('/movies/:name', function(req, res){
    var movieName = req.params.name;
    var allMovies = movieBank.list();

    var movies = allMovies.filter(function(singleMovie){
      return singleMovie['Title'] === movieName;
    })

   console.log('THIS IS THE INDIVIDUAL MOVIE', movies);

    res.render( 'movies.html', { movies: movies } );
  });

  router.get('/stylesheets/style.css', function(req, res) {
      var options = {
      root: './public/'
    };

    res.sendFile('stylesheets/style.css', options, function (err) {
      if (err) {
        console.log(err);
        res.status(err.status).end();
      }
      else {
        console.log('Sent:', options, 'stylesheets/style.css');
      }
    });
  });

  return router;
};
