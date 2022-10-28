const express = require("express");
const bodyParser = require("body-parser");
const handler = require("../handlers/index");

module.exports = (app) => {
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(express.json());
  app.post("/create-access-token", handler.createAccessTokenHandler);
  app.post("/direct-pay", handler.directPayHandler);
};
