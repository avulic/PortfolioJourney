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
    var address = "0xe668c9020db045da0cbd4de9581ca8d92713cc0d";
    var apiKey = "EK-ckAGC-g5DtN5h-JoNmm";
    //https://api.ethplorer.io/getAddressInfo/address?apiKey=apiKey
}

