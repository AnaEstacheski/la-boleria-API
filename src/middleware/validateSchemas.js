const validateSchema = (schema) => {
    return (req, res, next) => {
        const { error } = schema.validate(req.body, { abortEarly: false });
        if (error) {
            res.status(400).send(error.details.map(detail => detail.message))
            return
        }
        next();
    }
}

export default validateSchema