#fake-websockets
This is a specific project used by [proteus-charts](https://github.com/proteus-h2020/proteus-charts). It generates fake data according to a different set of data models (lines, bars, streams, etc.) 

##Getting started
```bash
git clone https://github.com/proteus-h2020/fake-websockets
npm install
node index.js
```
After that, all the websocket endpoint are ready and listening for incoming connections.

##Connecting to endpoints
Below the available endpoints that this program creates:
```javascript
//Simple endpoints
var linechart =  'ws://localhost:3000/linechart';
var gauge =  'ws://localhost:3000/gauge';
var barchart =  'ws://localhost:3000/barchart';

//Multiseries endpoint
var multiseriesLinechart =  'ws://localhost:3000/multiseriesLinechart';
var multiseriesBarchart =  'ws://localhost:3000/multiseriesBarchart';

```

