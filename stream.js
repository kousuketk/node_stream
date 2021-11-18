const fs = require('fs');

function showMemoryUsage() {
  const used = process.memoryUsage();
  const messages = [];
  for(let key in used) {
    messages.push(`${key}: ${Math.round(used[key] / 1024 / 1024 * 100 / 100)}`)
  }
  console.log('Memory:', messages.join(', '));
}

console.time('label');
fs.createReadStream(__dirname + '/bigdata.txt', 'utf8')
  .on('data', data => {
    console.log('Read byteLenght:', Buffer.byteLength(data));
    showMemoryUsage();
  }).on('end', () => {
    console.log('end.');
    showMemoryUsage();
  }).on('error', err => {
    console.error(err);
  })
console.timeEnd('label');