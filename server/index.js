var express = require('express');
var fs = require('fs');
var mongo = require('mongodb');
var bodyParser = require('body-parser');
const cors = require("cors");
var MongoClient = require('mongodb').MongoClient;
var dbo;
var app = express();
// File limits
app.use(express.json({ limit: '5mb' }));
app.use(express.urlencoded({ limit: '5mb' }));

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
app.use(cors({
    methods: ["POST"]
}));

// Create airline
app.post("/create-airline", function (req, res) {
    console.log(req.body.form);
    let obj = req.body.form;
    fs.writeFile('../client/src/assets/img/' + req.body.img.filename, req.body.img.value, 'base64',function (err) {
        if (err) throw err;
        console.log('ImagSaved!!');
        obj.logo = '../client/src/assets/img/' + req.body.img.filename;
        dbo.collection("Airlines").insertOne(obj, function (err, pres) {
            if (err) { res.send({ 'error': err }); throw err; }
            else {
                res.status(200).send({ messages: pres });
            }
        });
    });
});

// RUN Mongo DB
MongoClient.connect("mongodb://localhost:27017/", (err, client) => {    //mongo OK
    if (!err) console.log('mongo connected');
    else if (err) { console.log('fail to connect mongo'); throw err; }
    dbo = client.db('TechnicalTestDB');
    app.listen(8080, () => {
        console.log("listening at http://localhost:8080");
    });
});