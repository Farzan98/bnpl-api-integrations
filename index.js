const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");
const { sequelize } = require("./src/database/models");

app.use(
  cors({
    origin: "*",
  })
);

require("./src/routes")(app);

/**
 * Testing endpoint
 */
app.get("/", function (req, res) {
  res.json({ testing_message: "Hello World" });
});

sequelize
  .authenticate()
  .then((conn) => {
    console.log(`Connection established successfully!`);
  })
  .catch((error) => {
    console.log(`Connection failed!`);
  });

app.listen(3000, () => {
  console.log(`App listening on port 3000`);
});
