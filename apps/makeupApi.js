var request        = require('request'),
    readline       = require('readline'),
    url            = "";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Please enter what type of product you are searching for==>  ', (product_type) => {
    url = "http://makeup-api.herokuapp.com/api/v1/products.json?product_type=" + product_type;
    
    request(url, function(error, response, body) {
        var data = JSON.parse(body)
        displayData(data)
    })
    rl.close();
});

function displayData(data) {
for (i = 0; i < data.length; i++) {
    console.log(i + ". " + (data[i])["name"] + " costs " + (data[i])["price"] + "\n")
}
}