function linechartGenerator() {
  this.x = 0;

  this.next = () => {
    var series1 = [];
    if (this.x > 1000000) {
      this.x = 0;
    }
  }
  var data = [{ key: "series1", x: (++this.x), y: parseInt(Math.random() * (100 - 20) + 20) }];
  return JSON.stringify(data);
}

module.exports = linechartGenerator;