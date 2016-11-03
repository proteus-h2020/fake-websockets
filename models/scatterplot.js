function scatterplotGenerator() {

  this.next = () => {
    var data = [];
    
    data.push({
      x: Math.random() * (20 - (-20) + 1) + (-20),
      y: Math.random() * (20 - (-20) + 1) + (-20),
      key: "serie" + Math.floor(Math.random() * (5 - 0 + 1) + 0)
    });
    return JSON.stringify(data);
  }
}

module.exports = scatterplotGenerator;