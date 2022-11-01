const express = require("express");
const bodyParser = require("body-parser");
const merchantRoutes = require("./merchant-routes");

module.exports = (app) => {
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(express.json());
  app.use("/api", merchantRoutes);
};
