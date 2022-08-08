export default function validateSchema(schema) {
    return (req, res, next) => {
        const { body } = req;

        const validation = schema.validate(body, { abortEarly: true});

        if (validation.error) {
            return res.status(422).send(validation.error.details);
        }

        res.locals.body = body
        next();
    }
}
