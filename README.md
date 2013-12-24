# leap-stream

Send [the Leap's websocket stream](https://github.com/leapmotion/leapjs/blob/master/PROTOCOL.md) to [stdout](http://www.linfo.org/standard_output.html).

For example, to redirect the stream to a file:

    leap-stream > sample.ldj

Use `CTRL-C` (`control` key + `c` key) to terminate the redirect.

The Leap's websocket stream emits JSON-encoded [frames](https://github.com/leapmotion/leapjs/blob/master/PROTOCOL.md#frames) of motion data.  The `leap-stream` utility appends a newline character to each JSON frame, resulting in a motion sample file in [line-delimited JSON](http://en.wikipedia.org/wiki/Line_Delimited_JSON) format. To indicate the nature of the formatting, you'll want to use either `.ldj` or `.ldjson` as your file extension.
