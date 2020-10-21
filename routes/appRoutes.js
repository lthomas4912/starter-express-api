const express = require('express');
const router = express.Router(); //Router constructor
const quotesRoutes = require('./quotesRoutes')

router.use("/quotes", quotesRoutes)



// function asyncHandler(cb){
//     return async (req, res, next)=>{
//       try {
//         await cb(req,res, next);
//       } catch(err){
//         next(err);
//       }
//     };
//   }





module.exports = router;