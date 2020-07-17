const express = require('express');

const router = express.Router();

const { MovementValidator } = require('../validators');
const { MovementCotroller } = require('../controllers');

router.post('/movement',
  MovementValidator.create, MovementCotroller.create);

router.get('/users/:idUser/movement',
  MovementValidator.findAll, MovementCotroller.findAll);

router.get('/users/:idUser/movement/:idMovement',
  MovementValidator.findOne, MovementCotroller.findOne);

router.delete('/users/:idUser/movement/:idMovement',
  MovementValidator.deleteOne, MovementCotroller.deleteOne);

module.exports = router;
