// Basic require imports for Node.js
var express = require("express");
var bodyParser = require("body-parser");
var cors = require("cors");

// create an instance of express and instantiate bodyparser and cors

var app = module.exports = express();
app.use(bodyParser.json());
app.use(cors());

app.get('/dateValues/:dataVal', function(req,res,next){
    var dateVal = req.params.dataVal;
    var dateFormattingOptions = {
        year : 'numeric',
        month : 'long',
        day : 'numeric'
    };
    
    if(isNaN(dateVal)){
        var naturalDate = new Date(dateVal);
        naturalDate = naturalDate.toLocaleDateString('en-us',dateFormattingOptions);
        var unixDate = new Date(dateVal).getTime()/1000;
    } else {
        var unixDate = dateVal;
        var naturalDate = new Date(dateVal * 1000);
        naturalDate = naturalDate.toLocaleDateString('en-us',dateFormattingOptions);
    }
    
    res.json({unix:unixDate,natural:naturalDate});
});




app.listen(8080,function(){
    console.log('Working')
    
});