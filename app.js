import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import articleRouter from "./routes/article.js";

const app = express();
const port = process.env.PORT;

// ====================== MiddleWares =========================
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/articles", articleRouter);

// ================= Database connection ===========================
const connectionParams = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};
mongoose.set("strictQuery", false);

mongoose
  .connect(process.env.DATABASE_URL, connectionParams)
  .then(() => {
    app.listen(port, () => {
      console.log(`Server is running at port: ${port}`);
    });
  })
  .catch((e) => {
    console.log(e);
  });

// ==================== Home Route ====================
app.get("/", (req, res) => {
  res.status(200).send("Welcome To Our Blog System");
});
