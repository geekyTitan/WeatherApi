const express = require('express');
const path = require('path');

var app = express();

var port = process.env.PORT || 6000;


app.use("/", express.static(path.join(__dirname,'public')));

app.listen(port,() => {
    console.log(`Listening on port ${port}`);
})