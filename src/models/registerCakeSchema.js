import Joi from "joi";

const registerCake = Joi.object({
    name: Joi.string().trim().min(3).required(),
    price: Joi.number().positive().required(),
    image: Joi.string().uri().trim().max(300).required(),
    description: Joi.string().trim().required()
});

export default registerCake;