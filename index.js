var express = require('express')


var app = express()
app.get('/portfolioBalance', function (req, res) {
    getBinance();
    getBittrex()
    getBTCBlockchain()
    getETHBlockchain()
    res.end("dasds")
})

var server = app.listen(8081, function () {
    var host = server.address().address
    var port = server.address().port
    console.log("Example app listening at http://%s:%s", host, port)
})


function getBinance(params) {

}

function getBittrex(params) {

}

function getBTCBlockchain(params) {

}

function getETHBlockchain(params) {
    var address = process.env.REACT_APP_GOOGLE_API_KEY;
    var apiKey = "EK-ckAGC-g5DtN5h-JoNmm";
    //https://api.ethplorer.io/getAddressInfo/address?apiKey=apiKey
}

