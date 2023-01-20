import Article from "../models/article.js";
import { articleValidation } from "../validators/article.js";

export const addArticle = async (req, res) => {
  try {
    const { error } = articleValidation(req?.body);
    if (error) {
      return res.status(400).json({
        success: false,
        message: error.details[0].message,
      });
    }
    const newArticle = new Article({ ...req.body });
    const savedArticle = await newArticle.save();
    return res.status(201).json({
      success: true,
      data: savedArticle,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getAllArticles = async (req, res) => {
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
    console.log(error);
  }
};

export const getArticle = async (req, res) => {
  try {
    const { id } = req?.params;
    const article = await Article.findById(id).exec();
    res.status(200).json({
      success: true,
      data: article,
    });
  } catch (error) {
    console.log(error);
  }
};
