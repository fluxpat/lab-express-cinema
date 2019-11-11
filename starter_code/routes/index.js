const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie.js')

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/movies', (req, res, next) => {
  Movie.find({})
    .then(documents => {
      res.render('movies', { movies: documents })
    })
    .catch(err => {
      console.log(err)
    })
})

router.get('/movie/:movieId', (req, res, next) => {
  Movie.findById(req.params.movieId)
    .then(document => {
      res.render('movie', { movie: document })
      // res.send(document)
    })
    .catch(err => {
      console.log(err)
    })
})

module.exports = router;
