# leap-stream

Send [the Leap's websocket stream](https://github.com/leapmotion/leapjs/blob/master/PROTOCOL.md) to [stdout](http://www.linfo.org/standard_output.html).

![hands](hands.jpg)

You get `leap-stream`, a simple command-line utility that redirects the JSON-encoded [frames](https://github.com/leapmotion/leapjs/blob/master/PROTOCOL.md#frames) emitted from [the Leap's websocket stream](https://github.com/leapmotion/leapjs/blob/master/PROTOCOL.md) to stdout.  

To redirect the Leap's websocket stream to a file:

    leap-stream > sample.ldj

Use `CTRL-C` (`control` key + `c` key) to terminate the redirect.


## Install

Install with `npm install -g leap-stream`.
