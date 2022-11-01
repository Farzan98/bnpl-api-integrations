const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");

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

app.listen(3000, () => {
  console.log(`App listening on port 3000`);
});
