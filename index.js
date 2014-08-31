module.exports = function() {
  var that = {}
  var mem = []

  that.read = function(index, range, cb) {
    if (typeof range === 'function') return that.read(index, null, range)
    if (!range) range = {}

    if (!mem[index]) return cb(new Error('not found'))

    var b = mem[index]

    if (range.offset) b = b.slice(range.offset)
    if (range.length) b = b.slice(0, range.length)

    cb(null, b)
  }

  that.write = function(index, buf, cb) {
    mem[index] = buf
    cb()
  }

  return that
}