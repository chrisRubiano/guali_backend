const { celebrate, Joi, Segments } = require('celebrate');

module.exports = {
  create: celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      idUser: Joi.string().required(),
    }),
    [Segments.BODY]: Joi.object().keys({
      amount: Joi.number().required(),
      title: Joi.string().required(),
      category: Joi.string(),
      date: Joi.date(),
    }),
  }),
  findAll: celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      idUser: Joi.string().required(),
    }),
  }),
  findOne: celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      idUser: Joi.string().required(),
      idPost: Joi.string().required(),
    }),
  }),
  deleteOne: celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      idUser: Joi.string().required(),
      idPost: Joi.string().required(),
    }),
  }),
};
