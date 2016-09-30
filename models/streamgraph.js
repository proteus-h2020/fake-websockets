
function streamgraphGenerator() {
    this.item = 0;
    this.countries = ['ES', 'UK', 'FR', 'AS', 'IT'];



    this.next = () => {

        var data = [];

        for (var i in this.countries) {
            var country = this.countries[i];
            var dDate = this.date.add('days', 1).format('d/M/YY').toString();

            data.push({
                key: country,
                x: dDate, 
                y: Math.random() * 50
            });

        }

    console.log(data);
        return JSON.stringify(data);

    }
}

module.exports = streamgraphGenerator;