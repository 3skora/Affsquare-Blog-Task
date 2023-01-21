import Article from "../models/article.js";
import { articleValidation } from "../validators/article.js";
import { raiseValidationError, passError } from "../utils/errors.js";

export const addArticle = async (req, res, next) => {
  try {
    const { error } = articleValidation(req?.body);
    if (error) raiseValidationError(error);
    const newArticle = new Article({ ...req.body });
    const savedArticle = await newArticle.save();
    return res.status(201).json({
      success: true,
      data: savedArticle,
    });
  } catch (error) {
    passError(error, next);
  }
};

export const getAllArticles = async (req, res, next) => {
  try {
    const { q } = req?.query;
    const regex = new RegExp(q, "gi");
    const allArticles = await Article.find({
      $or: [{ title: regex }, { body: regex }, { author: regex }],
    }).exec();

    res.status(200).json({
      success: true,
      data: allArticles,
    });
  } catch (error) {
    passError(error, next);
  }
};

export const getArticle = async (req, res, next) => {
  try {
    const { id } = req?.params;
    const article = await Article.findById(id).exec();
    res.status(200).json({
      success: true,
      data: article,
    });
  } catch (error) {
    passError(error, next);
  }
};
