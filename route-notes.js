// send a GET request to /quotes read all of the quotes
// app.get('/quotes', async (req, res) =>{

//   try{
//     const quotes = await records.getQuotes();
//     res.json(quotes);
//   }catch(err){
//     res.json({message: err.message});
//   }
   
// });


// // send a GET request to /quotes/:id Read a quote
// // write code that compares the id requested from the client to the ids in our data
// app.get('/quotes/:id', asyncHandler( async (req, res, next) =>{
//     const quote =  await records.getQuote(req.params.id);
//     if(quote){
//       res.json(quote);
//     } else{
//       res.status(404).json({message: "Quote not found."});
      
//     }
//     res.json(quote);
 
// }));


// // send a POST request to /quotes to  CREATE a new quote
// // express takes info sent from the client and makes it avaialable
// // to us on the request object on a property called body.
// // the api will expect the client to send a json object containing the needed info

// app.post('/quotes', asyncHandler(async (req, res) => {
//   if(req.body.author && req.body.quote){
//     const quote = await records.createQuote({
//       quote: req.body.quote,
//       author:req.body.author
//     });
  
//     res.status(201).json(quote);
//   } else {
//     res.status(400).json({message: "Qoute and author required."})
//   }
// }));



// Send a PUT request to /quotes/:id to UPDATE a quote
// We will expect the client to send an object containing the correct properties and a value, 
// The object will be sent to the endpoint 
// Pull the id from the request and feed it to the records.quote method
//  It will return the quote in the variable make sure the system awaits the response.
// 
// app.put('/quotes/:id', asyncHandler( async(req,res, next) => {
//    const quote = await records.getQuote(req.params.id);
//     if(quote){
//       // Taking the object and properties from the client and reassigning the values in the data to match
//       quote.quote = req.body.quote;
//       quote.author = req.body.author;
      
//       await records.updateQuote(quote);
//       res.status(204).end();//tells express that we are done
//     }else {
//       res.status(404).json({message: "Ouote Not Found"});
//     }
    
// }));

// Send a DELETE request to /quotes/:id to DELETE a quote
// app.delete('/quotes/:id', asyncHandler( async(req,res, next) => {
//     const quote = await records.getQuote(req.params.id);
//     if(quote){
     
//       await records.deleteQuote(quote);
//       res.status(204).end();
//     }else{
//       res.status(404).json({message: "Not Found. Try again."})
//     }
  
// }));

// // send a GET request to /quotes/quote/random READ a random quote
// app.get('./quotes' , async (req, res) => {

//   const randomQuote = await records.getRandomQuote();
//   res.json(randomQuote);
// });


// aws dynamodb create-table \
//     --table-name Music \
//     --attribute-definitions \
//         AttributeName=Artist,AttributeType=S \
//         AttributeName=SongTitle,AttributeType=S \
//     --key-schema AttributeName=Artist,KeyType=HASH AttributeName=SongTitle,KeyType=RANGE \
//     --provisioned-throughput ReadCapacityUnits=1,WriteCapacityUnits=1