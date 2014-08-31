# torrent-memory-storage

[torrent-stream](https://github.com/mafintosh/torrent-stream) storage that stores pieces in memory

```
npm install torrent-memory-storage
```

## Usage

``` js
var torrents = require('torrent-stream')
var mem = require('torrent-memory-storage')
var engine = torrents('magnet:some-magnet-link', {
  storage: mem
})
```

## License

MIT