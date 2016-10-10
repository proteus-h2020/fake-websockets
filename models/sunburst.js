
function generateLabel()
{
  var label = "";
  var labelLenght = Math.floor(Math.random() * (10 - 0 + 1)) + 0;
  var alphabet = "abcdefghijklmnopqrstuvwxyz";

  for(var i = 0; i < labelLenght; i++ )
    label += alphabet.charAt(Math.floor(Math.random() * alphabet.length));

  return label;
}

function sunburstGenerator() {
  this.item = 0;
  this.parents = ['0'];
  this.initialised = false;

  this.next = () => {
    var data = [];
    if (!this.initialised) {
      data.push({ id: '0', parent: '', value: 0, label: generateLabel() });
      this.initialised = true;
    }
    var id = 0;
    while (id === 0 || this.parents.indexOf(id) !== -1) {
      id = Math.floor(Math.random() * (5000 - 0 + 1)) + 0;
    }
    this.parents.push(id);
    var parent = id;
    while(!parent || parent === id) {
      parent = this.parents[Math.floor(Math.random() * (this.parents.length - 0 + 1)) + 0];
    }
    // var value = Math.floor(Math.random() * (15 - 0 + 1)) + 0;
    var value = 1;

    data.push({ id: id.toString(), parent: parent.toString(), value: value.toString(), label: generateLabel() });
    return JSON.stringify(data);
  }
}

module.exports = sunburstGenerator;