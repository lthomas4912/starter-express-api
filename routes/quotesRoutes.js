const express = require('express');
const router = express.Router(); 
const controller = require('../controllers/quotesController');


router.get('/', controller.index);




module.exports = router;