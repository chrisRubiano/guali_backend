const { Movement } = require('../models');

module.exports = {
  // crear un movimiento
  create: (body) => new Movement(body),
  // Guardar el movimiento para el usuario
  addMovementToUser: (movement, user) => {
    user.movements.push(movement);
    return user.save();
  },
  // TODO lista de movimientos
  getUserMovements: (user) => {
    const UserMovements = user.movements;
    return UserMovements;
  },
};
