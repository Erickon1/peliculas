var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Film = require("../models/Film");

router.get('/', function(req, res){

  Film.find({}, function(err, datos) {
    res.status(200).json(datos);
  });

});
router.get('/:filmId', function(req, res){

  Film.findOne({
      'id': req.params.filmId
    }, function(err, datos) {
      if (datos == null) {
        res.status(404).json({
          mensaje: "No existe"
        });
      } else {
        res.status(200).json(datos);
      }

    });

});
router.post('/', function(req, res){

    var film = Film({
      id: req.body.id,
      name: req.body.name,
      year: req.body.year,
      gender: req.body.gender,
      director: req.body.director,
      producer: req.body.producer
    });

    film.save(function(err, data) {
      if (err) {
        res.status(404).json({
          mensaje: "Error al guardar"
        });
      } else {
        res.status(201).json(data);
      }
    });

});
router.patch('/:filmId', function(req, res){

    Film.findOne({
      'id': req.params.filmId
    }, function(err, film) {
      film.name= req.body.name,
      film.year= req.body.year,
      film.gender= req.body.gender,
      film.save(function(err, data) {
        if (err) {
          res.status(404).json({
            mensaje: "Error al guardar"
          });
        } else {
          res.status(201).json(data);
        }
      });
    });

});
router.delete('/:filmId', function(req, res){
  Film.findOneAndDelete({
    id: req.params.filmId
  }, function(err, data) {
    if (err) {
      res.status(404).json(err);
    }
    res.status(200).json(data);
  });
});
router.delete('/',function(req,res,next){
  res.status(405).json({mensaje:'Accion no permitida'});
});

module.exports = router;
