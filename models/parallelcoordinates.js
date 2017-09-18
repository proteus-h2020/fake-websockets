function parallelCoordinatesGenerator() {
    this.name = [   'AMC Ambassador Brougham',
                    'AMC Ambassador DPL',
                    'AMC Ambassador SST',
                    'AMC Concord DL 6',
                    'AMC Concord DL',
                    'AMC Concord',
                ]
    this.next = () => {

        var data = [];

        for (var i in this.name) {

            data.push({
                'name': this.name[i],
                'economy (mpg)': Math.floor((Math.random() * (25 - 13) + 13) * 10) / 10,
                'cylinders': Math.floor(Math.random() * (8 - 4 + 1) + 4),
                'displacement (cc)': Math.floor(Math.random() * (390 - 150 + 1) + 150),
                'power (hp)': Math.floor(Math.random() * (190 - 90 + 1) + 90),
                'weight (lb)': Math.floor(Math.random() * (3900 - 3030 + 1) + 3030),
                '0-60 mph (s)': Math.floor((Math.random() * (21 - 8) + 8) * 10) / 10,
                'year': Math.floor(Math.random() * (85 - 70 + 1) + 70)
            });

        }

        return JSON.stringify(data);

    }
}

module.exports = parallelCoordinatesGenerator;
