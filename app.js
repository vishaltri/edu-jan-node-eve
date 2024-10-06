var os = require('os');;

console.log('Platform:', os.platform());

console.log('OS Architecture:', os.arch());

console.log('Total Memory:', os.totalmem() / 1024 / 1024, 'MB');

console.log('Free Memory:', os.freemem() / 1024 / 1024, 'MB');