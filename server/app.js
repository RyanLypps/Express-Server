// import files and packages up here
const express = require('express')
const morgan = require('morgan');
const topSpotData = require('./data.json')
const app = express();
let router = express.Router();


// apply middleware
app.use(morgan('dev'));

// app.use(express.static('public'));

let requestCounter = Number(null);

// custom middle to count requestd
app.use((req, res, next) => {
    requestCounter++;
    console.log(`Request Number: ${requestCounter}`);
    next();
});

// create your express server below
// route handler for requests for /
app.get('/', (req, res) => {

    if(res.statusCode === 200 || res.statusCode === 304) {
        res.status(200).send('First Express Server');

}})

app.get('/data', (req, res) => {
    res.json(topSpotData);
})

// add your routes and middleware below

// app.use("/", router);

// router.route("/").all(function(req, res, next) {
//   res.status(200).send("hello world");
// });



// router.route("/data").all(function(req, res, next) {
//   res.json(topSpotData);
// });

module.exports = app;
