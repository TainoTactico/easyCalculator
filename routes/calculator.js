var express = require('express');
var router = express.Router();

const calculatorController = require('../controllers/calculatorController');  

router
    .route('/rectangleArea')
    .post(calculatorController.rectangleArea)
    .get(calculatorController.rectangleArea)

module.exports = router;