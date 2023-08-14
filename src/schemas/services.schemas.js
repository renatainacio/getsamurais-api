import Joi from 'joi';

const serviceSchema = Joi.object({
    userId: Joi.number().positive().required(),
    categoryId: Joi.number().positive().required(),
    photo: Joi.string().allow('').optional(),
    description: Joi.string().required(),
    price: Joi.number().positive().required(),
    priceType: Joi.number().positive().required(),
    status: Joi.boolean()
});

export default serviceSchema;