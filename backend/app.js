// Load express module
const express = require('express');

// Initialize app
const app = express();


app.use((req, res, next) =>{
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods","GET, POST, HEAD, PUT, OPTIONS, PATCH, DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-with, Content-Type, Accept");
    next();
});
// middleware
app.use(express.json());
app.use(express.urlencoded());

const mongoose = require('mongoose');

var url = "mongodb+srv://developer1:developer1234@cluster0.fgvz4.mongodb.net/webCric?retryWrites=true&w=majority";

mongoose.connect( url, {useNewUrlParser: true,  useUnifiedTopology: true} ); 
mongoose.connection.on( 'connected' ,() => {
  console.log("connected");
});



// schema of results array
var resultsSchema = new mongoose.Schema({
  id : String,
  detail : String,
  imageLink : String
});
//results table
const results = mongoose.model("results", resultsSchema);



// schema of ranking 
var rankingSchema = new mongoose.Schema({
    name : String,
    imageLink : String,
    number : String,
    team : String
});
//ranking table
const rankings = mongoose.model("ranking",rankingSchema);


// schema of feed
var feedsSchema = new mongoose.Schema({
    heading : String,
    news : String,
    photopath : String
});

const feeds = mongoose.model("feeds",feedsSchema);



// schema of feed
var liveSchema = new mongoose.Schema({
    team_a : String,
    team_b : String,
    header : String,
    footer : String 
});

const live = mongoose.model("live",liveSchema);




 // adding data to results table in db

// const data = {
//     team_a : "QG 170-8", team_b: "PZ 171-5",header: "PZ won", footer: "PZ won by 4 wickets"
// }

// const newLive = new live(data);

// newLive.save( (error) =>{
//     if ( error){
//         console.log("error occured", error);
//     }else{
//         console.log("data saved");
//     }
// });










// Route for home
app.get('/', function (req, res) {
    res.send('hello world')
});




// Route for fetching all results 
app.get('/allresults', function (req, res) {

    // fetch data from database
    results.find( {} )
        .then( ( data ) => {   res.json(data);  })
        .catch ( (error) => { console.log(error);
    });
 
});


// Add Entry
app.post("/addlive", (req, res) => {
    if (!req.body.team_a || !req.body.team_b || !req.body.header || !req.body.footer) return res.status(400).end();
  
    const entry = {
      team_a: req.body.team_a,
      team_b: req.body.team_b,
      header: req.body.header,
      footer: req.body.footer
    };


    const newdata = new live(entry);

    newdata.save( (error) =>{
        if ( error){
            console.log("error occured", error);
        }else{
            console.log("data saved");
        }
    });

    
    res.json(entry);
 
});




// Route for fetching all rankings
app.get('/allrankings', function (req, res) {

    // fetch data from database
    rankings.find( {} )
        .then( ( data ) => {  res.json(data);  })
        .catch ( (error) => { console.log(error);
    });
    
});


// Route for fetching all rankings
app.get('/allfeeds', function (req, res) {

    // fetch data from database
    feeds.find( {} )
        .then( ( data ) => {  res.json(data);  })
        .catch ( (error) => { console.log(error);
    });
    
});




// Route for fetching all rankings
app.get('/alllive', function (req, res) {

    // fetch data from database
    live.find( {} )
        .then( ( data ) => {   res.json(data);  })
        .catch ( (error) => { console.log(error);
    });
    
});







app.use(express.json()); // This help to parson json format data between frontend and backend
// Start server with port 3000
app.listen(3000, function(){ console.log("Server started on localhost:3000"); });