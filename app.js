const express = require("express");
const app = express();
const port = process.env.PORT;

const cors = require("cors");
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const mongoose = require("mongoose");
const connectionParams = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  //   strictQuery: true,
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

app.get("/", (req, res) => {
  res.status(200).send("hello");
});
