
function sunburstGenerator() {
  this.item = 0;
  this.data = [];

  this.next = () => {
    var nNodes = Math.floor(Math.random() * (5 - 0 + 1)) + 0;
    var rValue = Math.floor(Math.random() * (25 - 0 + 1)) + 0;

    var path = 'root';

    for (var i = 0; i < nNodes; i++) {
      var node = Math.floor(Math.random() * (10 - 0 + 1)) + 0;
      path = path + '/node' + node;
    }

    this.data.push({ "path": path, "value": rValue});

    var data = this.data;
    console.log(data);

    return JSON.stringify(data);

  }
}

module.exports = sunburstGenerator;