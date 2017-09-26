function linechartGenerator() {
  this.x = 0;

  function randomNull() {
    return Math.random() <= 0.2;
  }

  this.next = () => {

    var x = (++this.x);

    var data = [
      { key: 'serie1', x: x, y: randomNull() ? 'NUL' : parseInt(Math.random() * (100 - 20) + 20) },
      { key: 'serie2', x: x, y: parseInt(Math.random() * (100 - 20) + 20) },
      { key: 'serie3', x: x, y: parseInt(Math.random() * (100 - 20) + 20) }
    ];

    console.log(data);

    return JSON.stringify(data);
  }
}

module.exports = linechartGenerator;