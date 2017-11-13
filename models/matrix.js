function matrixGenerator() {

  this.next = () => {
    var data = [];
    
    data.push({
      x: Math.floor(Math.random() * (5 - (-5) + 1) + (-5)),
      y: Math.floor(Math.random() * (5 - (-5) + 1) + (-5)),
      z: Math.floor(Math.random() * (200 - (0) + 1) + (0)),
      a: "cat" + Math.floor(Math.random() * (5 - 0 + 1) + 0),
      b: "cat" + Math.floor(Math.random() * (5 - 0 + 1) + 0),
      c: Math.floor(Math.random() * (20 - (0) + 1) + (0))
    });
    return JSON.stringify(data);
  }
}

module.exports = matrixGenerator;