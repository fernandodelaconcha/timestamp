// Basic require imports for Node.js
var express = require("express");
var bodyParser = require("body-parser");
var cors = require("cors");

// create an instance of express and instantiate bodyparser and cors

var app = module.exports = express();
app.user(bodyParser.json());
app.user(cors());