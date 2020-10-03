const express = require('express');
const app = express();
const routes = require('./routes');



// Express Middleware To access values on req.body
// express middleware We are expecting a request to come in as json on the property body
// occurs after the client has made a request and before the server sends a response.
app.use(express.json());
app.use('/api', routes);





// Express middleware
// If a request from the client comes in and does not match a route, middleware comes here
// route error handler
// Either ends the request response cycle or moves Express to the next middleware function

app.use((req,res, next) => {
  const err = new Error("Not Found");
  err.status = 404;
  next(err);
});


// Express middleware
// Error handler must have four parameters. That's how express knows what function to pass it too
// using the next function
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.json({
    error: {
      message: err.message
    }
  });
});


app.listen(3000, () => console.log('Quote API listening on port 3000!'));

