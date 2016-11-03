var moment = require('moment');

function swimlaneGenerator() {
  this.item = 0;
  this.lanes = [];

  this.lanes.push({ id: 0, label: 'Carril 0' });
  this.lanes.push({ id: 1, label: 'Carril 1' });
  this.lanes.push({ id: 2, label: 'Carril 2' });


  this.date = moment(new Date(2009, 9, 18, 0, 0, 0));

  this.next = () => {
    if (this.item > 1000000) {
      this.item = 0;
      this.date = moment(new Date(2009, 9, 18, 0, 0, 0));
    }
    var data = [];

    for (var i = 0; i < this.lanes.length; i++) {
      var lane = this.lanes[i];
      data.push({
        key: lane.label,
        start: this.date.add('days', 1).format('YY/MM/DD').toString(),
        end: this.date.add('days', 3).format('YY/MM/DD').toString()
      })
    }
    
    return JSON.stringify(data);

  }
}

module.exports = swimlaneGenerator;