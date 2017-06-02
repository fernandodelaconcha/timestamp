// Basic require imports for Node.js
var express = require("express");
var bodyParser = require("body-parser");
var cors = require("cors");

// create an instance of express and instantiate bodyparser and cors

var app = module.exports = express();
app.use(bodyParser.json());
app.use(cors());

app.get('/dateValues/:dateVal', function(req,res,next){
    var dateVal = req.params.dateVal;
    var unixDate;
    var naturalDate;
    var dateFormattingOptions = {
        year : 'numeric',
        month : 'long',
        day : 'numeric'
    };
    
    if(isNaN(dateVal)){
        naturalDate = new Date(dateVal);
        naturalDate = naturalDate.toLocaleDateString('en-us',dateFormattingOptions);
        unixDate = new Date(dateVal).getTime()/1000;
    } else {
        unixDate = dateVal;
        naturalDate = new Date(dateVal * 1000);
        naturalDate = naturalDate.toLocaleDateString('en-us',dateFormattingOptions);
    }
    
    res.json({unix:unixDate,natural:naturalDate});
});




app.listen(8080,function(){
    console.log('Working')
    
});