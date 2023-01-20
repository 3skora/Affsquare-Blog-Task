import Joi from "joi";

export const articleValidation = (data) => {
  const schema = Joi.object({
    title: Joi.string().required().min(2),
    body: Joi.string().required().min(2),
    author: Joi.string().required().min(2),
  });

  return schema.validate(data);
};
