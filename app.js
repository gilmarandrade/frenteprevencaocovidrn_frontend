var express = require('express');
var path = require('path');
var app = express();

var port = process.env.PORT || 3000;

app.get('/', function (req, res) {
    res.send('Hello World from frenteprevencaocovidrn-org-br FRONTEND!');
});
                                
app.listen(port, function () {
    console.log('[frenteprevencaocovidrn-org-br] FRONTEND listening on port %s', port);
});