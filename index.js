const cron = require("node-cron");
const express = require("express");
const {Parser} = require("json2csv");
var Promise = require('bluebird');
const fs = require("fs");
var route = express.Router();
var DB = require("./models/index");
var surveys = DB.samplesurveys;
var sequelize = DB.Sequelize;
var path = require('path');
var bodyParser = require("body-parser");

route.use(bodyParser.json()); // for parsing application/json
route.use(bodyParser.urlencoded({extended: true})); // for parsing application/x-www-form-urlencoded

app = express();
const fields = ['column1', 'column2', "column3", 'column4'];
const opts = {fields};
// schedule tasks to be run on the server


cron.schedule("56 15 * * *", function () {


    return surveys.findAll({
        raw: true,
        attributes: ["column1", "column2", "column3", "column4"]
    }).then(function (result) {
        parser = new Parser(opts);
        const csv = parser.parse(result);
        fs.writeFile('csv-exports/' + new Date() + '.csv', csv, function (err) {
            console.log(path);
            console.log(err);
        });


    }).catch(function(err)
    {
        console.error(err);
    });

});


app.listen("3128");
