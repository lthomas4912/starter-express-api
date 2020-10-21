const express = require('express');
const app = express();
const routes = require('./routes');



app.use(express.json());
app.use('/https://officeapi.dev/api/', routes);



app.use( ( req, res, next) => {
   const err = new Error('Not Found');
   err.status = 404;
});


// Error middleware
// Error handler must have four parameters. That's how express knows what function to pass it too
// using the next function
// 
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.json({
    error: {
      message: err.message
    }
  });
});

app.listen(3000, () => console.log("The Office API listening on port 3000"));
