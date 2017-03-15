var request        = require('request'),
    readline       = require('readline'),
    url            = "";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Please enter what type of product you are searching for==>  ', (productType) => {
    url = "http://makeup-api.herokuapp.com/api/v1/products.json?product_type=" + productType;
    rl.close();
});

request(url, function(error, response, body) {
    console.log(body)
})