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

    for (let i = 0; i < this.lanes.length; i++) {
      let lane = this.lanes[i];
      data.push({
        key: lane.label,
        x: this.date.add('days', 1).toString(),
        y: this.date.add('days', 3).toString(),
      })
    }
    

    /**
        var data = { lanes: this.lanes, items: [] };
    
        for (var i = 0; i < this.lanes.length; i++) {
          data.items.push({
            id: this.item,
            lane: i,
            start: this.date.add('days', 1).toString(),
            end: this.date.add('days', 3).toString(),
            class: 'past'
          });
    
          this.date.add('days', 2);
          this.item++;
        }
      **/
    return JSON.stringify(data);

  }
}

module.exports = swimlaneGenerator;