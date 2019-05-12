// Express server
var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 8092));
app.use(express.static(__dirname + '/dist'));

app.get('*', (req, res) => {
  res.sendFile(`${__dirname}/dist/index.html`);
});

app.listen(app.get('port'), function() {
  console.log('Listening on port', app.get('port'));
});