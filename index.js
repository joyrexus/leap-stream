#!/usr/bin/env node
(function() {
  var ws = require('websocket-stream')('ws://localhost:6437');
  ws.on('data', function(d) { console.log(d) });
}).call(this);
