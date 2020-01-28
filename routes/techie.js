const express = require('express');
const router = express.Router();
const techieController = require("../../controllers/techieController");


router
  .route("/")
  .get(techieController.findAll);

module.exports = router;