import Joi from "joi";

const registerClient = Joi.object({
    name: Joi.string().trim().min(3).required(),
    address: Joi.string().trim().min(3).required(),
    phone: Joi.string().trim().min(10).max(11).regex(/^\d+$/).required()
});

export default registerClient;