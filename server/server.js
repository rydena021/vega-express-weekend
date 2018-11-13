let express = require('express');
let bodyParser = require('body-parser');
let app = express();
const PORT = 5000;

app.use(express.static('server/public'));

app.use(bodyParser.urlencoded({ extended: true }));

// listen for localhost:5000/vega
app.get('/vega', function (request, response) {
  // say hello to vega
  response.send('hello world')
});

app.listen(PORT, function () {
  console.log('app is running');
});
