var ws = require("nodejs-websocket");
var TIME_INTERVAL = 2500;
var server = ws.createServer((conn) => {
  var path = conn.path;
  var generator = require('./models' + path);
  scheduleDataStreaming(generator, TIME_INTERVAL);

  conn.on("text", (str) => {
    console.log("Received " + str)
  });

  conn.on("close", (code, reason) => {
    console.log("Connection closed")
  });

  function scheduleDataStreaming(cb, time) {
    var iterator = new generator();
    setInterval(() => {
      var data = iterator.next();
      conn.sendText(data);
    }, time);
  }
}).listen(3000);

