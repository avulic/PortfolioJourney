var express = require('express')
var bittrex = require('node-bittrex-api');
const Binance = require('node-binance-api');

var app = express()
app.get('/portfolioBalance', function (req, res) {
    getBinance();
    getBittrex();
    getBTCBlockchain();
    getETHBlockchain();
})

var server = app.listen(8081, function () {
    var host = server.address().address
    var port = server.address().port
    console.log("Example app listening at http://%s:%s", host, port)
})


function getBinance(params) {
    const binance = new Binance().options({
        APIKEY: process.env.BITTREX_API_KEY,
        APISECRET: process.env.BITTREX_API_SEC
    });

    binance.balance((error, balances) => {
        if (error) return console.error(error);
        console.info("balances()", balances);
        console.info("ETH balance: ", balances.ETH.available);

        res.end("balances()", balances);
    });

}


function getBittrex(params) {
    bittrex.options({
        'apikey': process.env.BITTREX_API_KEY,
        'apisecret': process.env.BITTREX_API_SEC,
    });
    bittrex.getbalance({ currency: 'BTC' }, function (data, err) {
        if (err) {
            return console.error(err);
        }
        console.log(data);
    });
}

function getBTCBlockchain(params) {

}

function getETHBlockchain(params) {
    var address = "0xe668c9020db045da0cbd4de9581ca8d92713cc0d";
    var apiKey = "EK-ckAGC-g5DtN5h-JoNmm";
    //https://api.ethplorer.io/getAddressInfo/address?apiKey=apiKey
}

