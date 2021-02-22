# telnet-client - with fixes

Bad things will happen when you call `exec` while previous one is still working with [telnet-client][1] on single
connection. And this is totally possible with big app with a lot of async stuff. This wrapper fixes that by queuing the
calls. Original repo seems dead, so I've created this wrapper.

API is identical to `telnet-client`.

> All credit and kudos goes to original library author @mkozjak.

## License

MIT

[1]: https://www.npmjs.com/package/telnet-client
