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
    methods: ["POST", "PUT", "DELETE"]
}));

// Create airline
app.post("/create-airline", function (req, res) {
    console.log(req.body.form);
    let obj = req.body.form;
    fs.writeFile('../client/src/assets/img/' + req.body.img.filename, req.body.img.value, 'base64', function (err) {
        if (err) throw err;
        console.log('ImagSaved!!');
        obj.logo = 'assets/img/' + req.body.img.filename;
        dbo.collection("Airlines").insertOne(obj, function (perr, pres) {
            if (perr) { res.send({ 'error': perr }); throw perr; }
            else {
                res.status(200).send({ messages: pres });
            }
        });
    });
});

// Read airlines
app.get("/airlines", function (req, res) {
    dbo.collection("Airlines").find({}).toArray(function (err, pres) {
        console.log(pres);
        if (err) { res.send({ 'error': err }); throw err; }
        else res.status(200).send(pres);
    });
});

// Read single airline
app.get("/airline", function (req, res) {
    let _id = new mongo.ObjectId(req.query.id);
    let query = { _id: _id };
    dbo.collection("Airlines").find(query).toArray(function (err, pres) {
        console.log(pres);
        if (err) { res.send({ 'error': err }); throw err; }
        else res.status(200).send(pres[0]);
    });
});

// Update airline
app.put("/update-single", function (req, res) {
    let _id = new mongo.ObjectId(req.body._id);
    let query = { _id: _id };
    let obj = req.body;
    obj._id = _id;
    console.log(req);
    dbo.collection("Airlines").update(query, req.body, function (err, result) {
        if (err) throw err;
        res.status(200).send(result);
    });
});

// Delete airline
app.delete("/del-airline", function (req, res) {
    let _id = new mongo.ObjectId(req.query.id);
    let query = { _id: _id };
    dbo.collection("Airlines").deleteOne(query, function (err, obj) {
        if (err) throw err;
        res.status(200).send(obj);
        fs.unlink('../client/src/' + req.query.logo, function (err) {
            if (err) throw err;
            console.log('File deleted!');
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