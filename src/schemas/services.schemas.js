import Joi from 'joi';

const serviceSchema = Joi.object({
  categoryId: Joi.number().positive().required(),
  photo: Joi.string().allow('').optional(),
  description: Joi.string().required(),
  price: Joi.number().positive().allow('').optional(),
  priceUnit: Joi.string().allow('').optional(),
  status: Joi.boolean(),
});

export default serviceSchema;
