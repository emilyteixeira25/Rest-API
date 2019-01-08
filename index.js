const express = require('express');

//set up express app
const app = express();

//listen for requests
app.listen(process.env.PORT || process.env.IP, function(){
    console.log('now listening for requests');
});