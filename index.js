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
    conn = null;
    console.log("Connection closed")
  });

  function scheduleDataStreaming(cb, time) {
    var iterator = new generator();
    setInterval(() => {
      if(conn == null)return;
      var data = iterator.next();
      conn.sendText(data);
    }, time);
  }
}).listen(process.env.PORT || 3000);

