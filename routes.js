const express = require('express');
const router = express.Router();
const data = require('./data');


function asyncHandler(cb){
    return async (req, res, next) => {
        try {
            await cb(req, res, next)
        }
    }
}