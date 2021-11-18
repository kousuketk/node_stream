const fs = require('fs');

console.log('File size:', fs.statSync(__dirname + '/bigdata.txt').size / 1024 / 1024, 'MB');
console.time('label');
fs.readFile(__dirname + '/bigdata.txt', 'utf8', (err, data) => {
  const used = process.memoryUsage();
  const messages = [];
  for(let key in used) {
    messages.push(`${key}: ${Math.round(used[key] / 1024 / 1024 * 100) / 100}`)
  }
  console.log('Memory:', messages.join(', '));
});
console.timeEnd('label');