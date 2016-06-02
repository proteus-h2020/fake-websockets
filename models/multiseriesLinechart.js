function multilinechartGenerator() {
  this.x = 0;

  this.next =  () => {
    var series1 = [];
    var series2 = [];
    var series3 = [];
    if (this.x > 1000000) {
      this.x = 0;
    }
    for (var i = 0; i < 3; i++) {
      series1.push({
        x: (++this.x),
        y: parseInt(Math.random() * (100 - 20) + 20)
      });
      series2.push({
        x: (++this.x),
        y: parseInt(Math.random() * (100 - 20) + 20)
      });
      series3.push({
        x: (++this.x),
        y: parseInt(Math.random() * (100 - 20) + 20)
      });
    }
    var data = [{ key: "series1", values: series1 }, { key: "series2", values: series2 }, { key: "series3", values: series3 }];
    return JSON.stringify(data);
  }
}

module.exports = multilinechartGenerator;