function gaugeGenerator() {

  this.next =  () => {
    var data = [];
    for (var i = 0; i < 3; i++) {
      data.push({
        value: parseInt(Math.random() * (100))
      });
    }
    return JSON.stringify(data);
  }
}

module.exports = gaugeGenerator;