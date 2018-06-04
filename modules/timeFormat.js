var os = require('os');
var colors = require('colors');

function timeFormat() {
  var uptime = os.uptime();
  console.log('Uptime: ~'.green, convertTime(uptime));
}

function convertTime(s) {
  var h, m, s;
  m = Math.floor(s / 60);
  h = Math.floor(m / 60);
  s = s % 60;
  m = m % 60;
  h = h % 24;
  return {h: h, m: m, s: s.toFixed(0)};
};

exports.print = timeFormat;