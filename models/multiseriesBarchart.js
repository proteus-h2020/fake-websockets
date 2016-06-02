function barchartGenerator() {
  this.categories = [
    'España',
    'Francia',
    'UK',
    'Germany',
    'Portugal'
  ];

  this.next = () => {
    var data = [
      {
        key: 'Serie1',
        values: []
      },
      {
        key: 'Serie2',
        values: []
      },
      {
        key: 'Serie3',
        values: []
      }
    ];
    for (var category in this.categories) {
      data[0].values.push({
        x: this.categories[category],
        y: Math.random() * 100
      });
      data[1].values.push({
        x: this.categories[category],
        y: Math.random() * 100
      });
      data[2].values.push({
        x: this.categories[category],
        y: Math.random() * 100
      });
    }
    return JSON.stringify(data);
  }
}

module.exports = barchartGenerator;