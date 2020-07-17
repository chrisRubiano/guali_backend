const { UserService, MovementService } = require('../services');

module.exports = {
  create: async (req, res) => {
    const { idUser } = req.params;
    const { body } = req;
    // try {
      const user = await UserService.findOneById(idUser);
      const movement = await MovementService.create(body);
      const userWithmovement = await MovementService.addMovementToUser(movement, user);
      res.status(201).json(userWithmovement);
    // } catch (error) {
    //   res.status(400).json({ message: 'error adding movement to user', error });
    // }
  },
  findAll: async (req, res) => {
    const { idUser } = req.params;
    try {
      const user = await UserService.findOneById(idUser);
      const { movements } = user;
      res.status(200).json(movements);
    } catch (error) {
      res.status(400).json({ message: 'Error getting user movements', error });
    }
  },
  findOne: async (req, res) => {
    const { idUser, idmovement } = req.params;
    try {
      const user = await UserService.findOneById(idUser);
      const movement = MovementService.findOneByIdInUser(idmovement, user);
      if (!movement) res.status(404).json({ message: 'movement not found' });
      res.status(200).json(movement);
    } catch (error) {
      res.status(400).json({ message: 'Error getting user movement by id', error });
    }
  },
  deleteOne: async (req, res) => {
    const { idUser, idmovement } = req.params;
    try {
      const user = await UserService.findOneById(idUser);
      if (!user) res.status(404).json({ message: 'User not found' });
      const movement = MovementService.findOneByIdInUser(idmovement, user);
      if (!movement) res.status(404).json({ message: 'movement not found' });
      await MovementService.updateOneByIdInUser(idmovement, user, { is_active: false });
      res.status(204).json();
    } catch (error) {
      res.status(400).json({ message: 'Error getting user movement by id', error });
    }
  },
};
