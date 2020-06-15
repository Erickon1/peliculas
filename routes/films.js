var express = require('express');
var router = express.Router();

var films = require('../controller/FilmsController.js');

router.get('/', films.list);
router.get('/show/:id', films.show);
router.get('/create', films.create);
router.post('/save', films.save);
router.get('/edit/:id', films.edit);
router.patch('/update/:id', films.update);
router.delete('/delete/:id', films.delete);

module.exports = router;
