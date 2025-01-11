const express = require("express");
const app = express();
const port = 8080;
var path = require('path')

app.use(express.static(path.join(__dirname, 'public')));
app.get('/',function(req, res) {
    res.sendFile(__dirname + '/public/views/index.html');
});
app.listen(port, () => {
    console.log("App listening on port: " + port);
})