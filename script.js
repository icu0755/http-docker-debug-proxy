var net = require("net");

var host = process.env["DST_PORT_" + process.env["PORT"] + "_TCP_ADDR"];
var port = process.env["PORT"];

proxy = net.createServer(function(socket){
  var client;
  console.log('**** Client connected to proxy');

  client = net.connect({port: port, host: host});

  clientToServer = socket.pipe(client)
  serverToClient = clientToServer.pipe(socket);

  socket.on('close', function () {
      console.log('**** Client disconnected from proxy');
  });
  socket.on('error', function (err) {
      console.log('Error: ' + err.soString());
  });

  socket.on('data', function(d) {
    var s = d.toString()
    console.log("=> " + s.replace(/\n/g, "\n=> "))
  })
  clientToServer.on('data', function(d) {
    var s = d.toString()
    console.log("<= " + s.replace(/\n/g, "\n<= "))
  })

})
proxy.listen(8000)
