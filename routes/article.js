import express from "express";
import * as articleController from "../controllers/article.js";
const router = express.Router();

router.post("/", articleController.addArticle);
router.get("/", articleController.getAllArticles);
router.get("/:id", articleController.getArticle);

export default router;
