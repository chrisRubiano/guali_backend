const express = require('express');

const router = express.Router();

const { PostValidator } = require('../validators');
const { MovementCotroller } = require('../controllers');

router.post('/users/:idUser/movement',
  PostValidator.create, MovementCotroller.create);

router.get('/users/:idUser/movement',
  PostValidator.findAll, MovementCotroller.findAll);

router.get('/users/:idUser/movement/:idMovement',
  PostValidator.findOne, MovementCotroller.findOne);

router.delete('/users/:idUser/movement/:idMovement',
  PostValidator.deleteOne, MovementCotroller.deleteOne);

module.exports = router;
