const express = require('express');

const router = express.Router();

const { MovementValidator } = require('../validators');
const { MovementController } = require('../controllers');

router.post('/users/:idUser/movement',
  MovementValidator.create, MovementController.create);

router.get('/users/:idUser/movement',
  MovementValidator.findAll, MovementController.findAll);

router.get('/users/:idUser/movement/:idMovement',
  MovementValidator.findOne, MovementController.findOne);

router.delete('/users/:idUser/movement/:idMovement',
  MovementValidator.deleteOne, MovementController.deleteOne);

module.exports = router;
