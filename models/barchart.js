function barchartGenerator() {
  this.categories = [
    'España',
    'Francia',
    'UK',
    'Germany',
    'Portugal'
  ];

  this.next = () => {
    var data = [];
    
    for (var category in this.categories) {
      data.push({
        x: this.categories[category],
        y: Math.random() * 100
      });
    }
    return JSON.stringify(data);
  }
}

module.exports = barchartGenerator;