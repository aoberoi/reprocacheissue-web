var http = require('http');

var server = http.createServer(function(req, res) {
  if (var i = req.headers['x-rci-i']) {
    res.statusCode = 200;
    res.end(i);
    console.log('custom header value: ' + i);
  } else {
    res.statusCode = 500;
    res.end('no custom header found');
    console.log('no custom header found');
  }
});

server.listen(process.env.PORT || 5000, function() {
  console.log('listening...');
});
