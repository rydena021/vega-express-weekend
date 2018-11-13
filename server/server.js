let express = require('express');
let bodyParser = require('body-parser');
let app = express();
const PORT = 5000;

app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.listen(PORT, function () {
  console.log('app is running');
})
