import Joi, { required } from "joi";

export const ThreedSchema = Joi.object({
    description: Joi.string().min(5).required(),
    image: Joi.string()
})