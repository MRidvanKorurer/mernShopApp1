const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const conn = require("./db");
const productRoute = require("./routes/product");

dotenv.config();

const app = express();
const port = process.env.PORT;



//* middlewares
app.use(express.json());
app.use(cors());



//* routing
app.use("/api/products", productRoute);

app.listen(port, () => {
  conn();
  console.log(`Application running on port: ${port}`);
});
