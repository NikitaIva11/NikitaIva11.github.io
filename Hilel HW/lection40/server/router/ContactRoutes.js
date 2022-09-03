const ContactController = require("../controllers/contact-controller")

const Router = require('express').Router;

const ContactRoutes = new Router();

ContactRoutes.post('/ask',ContactController.contact);

module.exports = ContactRoutes;