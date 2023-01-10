import Joi from "joi";

const registerOrder = Joi.object({
    clientId: Joi.number().integer().required(),
    cakeId: Joi.number().integer().required(),
    quantity: Joi.number().integer().positive().greater(0).less(5).required(),
    totalPrice: Joi.number().positive().required()
});

export default registerOrder;