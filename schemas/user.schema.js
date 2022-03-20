const Joi = require('joi');

const id = Joi.number().integer();
const email = Joi.string().email();
const role = Joi.string().min(5)

const updateUserSchema = Joi.object({
  email: email,
  role: role,
});

const getUserSchema = Joi.object({
  id: id.required(),
});

module.exports = { updateUserSchema, getUserSchema }