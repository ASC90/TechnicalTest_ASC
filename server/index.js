var express = require('express');
// var fs = require('fs');
var mongo = require('mongodb');
var bodyParser = require('body-parser');
const cors = require("cors");
var MongoClient = require('mongodb').MongoClient;
var dbo;
var app = express();
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
app.use(cors({
    methods: ["POST"]
}));

app.post("/create-airline", function (req, res){
    console.log(req.body);
    let obj = req.body;
    dbo.collection("Airlines").insertOne(obj, function(err, pres) {
        if (err) pres.send({ 'error': err });
        else {
            res.status(200).send({messages: pres});
        }
      });
});

// RUN Mongo DB
MongoClient.connect("mongodb://localhost:27017/", (err, client) => {    //mongo OK
    if (!err) console.log('mongo connected');
    else if (err){ console.log('fail to connect mongo'); throw err;}
    dbo = client.db('TechnicalTestDB');
    app.listen(8080, () => {
        console.log("listening at http://localhost:8080");
    });
});