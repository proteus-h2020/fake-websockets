function linechartGenerator() {
  this.x = 0;

  this.next = () => {
    var series1 = [];
    if (this.x > 1000000) {
      this.x = 0;
    }
    /**
    for (var i = 0; i < 3; i++) {
      series1.push({
        x: (++this.x),
        y: parseInt(Math.random() * (100 - 20) + 20)
      });
    }
    **/
    //var data = [{ key: "series1", values: series1 }];
    var key = (this.x % 2 == 0) ? 'serie1' : 'serie2';
    var data = [{ key: key, x: (++this.x), y: parseInt(Math.random() * (100 - 20) + 20) }];

    return JSON.stringify(data);
  }
}

module.exports = linechartGenerator;