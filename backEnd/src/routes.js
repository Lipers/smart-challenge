const express = require("express");

const routes = express.Router();
const intentionController = require("./controllers/intentionController");
const userController = require("./controllers/customerController");

//todo: tratar zero a esquerda
routes.post("/intention/", intentionController.create);

routes.put("/intention/:uuid", intentionController.update);

routes.post("/customer", userController.create);

module.exports = routes;
