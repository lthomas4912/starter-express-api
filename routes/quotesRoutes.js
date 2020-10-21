const express = require('express');
const router = express.Router(); //Router constructor
const controller = require('../controllers/quotesController')


router.get('/', controller.index)
router.get('/index/:dog', controller.create)



module.exports = router