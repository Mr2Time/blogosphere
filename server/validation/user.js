import joi from "joi";

export const loginValidation = (data) => {

    const schema = joi.object({
        email: joi.string().email().required(),
        password: joi.string().min(6).required(),
    });

    return schema.validate(data);
};

export const regValidation = (data) => {
    const schema = joi.object({
        email: joi.string().email().required(),
        password: joi.string().min(6).max(20).required(),
    });

    return schema.validate(data);
};