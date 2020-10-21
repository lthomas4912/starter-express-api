const express = require('express');
const app = express();
const routes = require('./routes/appRoutes');
const PORT = 3000;


app.use(express.json());
app.use('/', routes);



// app.use((req, res, next) => {
//   const err = new Error('Not Found');
//   err.status = 404;
// });

// app.use((err, req, res, next) => {
//   res.status(err.status || 500);
//   res.json({
//     error: {
//       message: err.message
//     }
//   })
// });

app.listen(PORT, () => console.log(`The Office API listening on port ${PORT}`));
