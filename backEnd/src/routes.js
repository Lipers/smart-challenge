const express = require("express");

const routes = express.Router();
const intentionController = require("./controllers/intentionController");
const customerController = require("./controllers/customerController");

routes.post("/intention", intentionController.create);

routes.put("/intention/:uuid", intentionController.update);

routes.post("/customer", customerController.create);

routes.get("/customer", customerController.read);

routes.put("/customer", customerController.update);

module.exports = routes;
