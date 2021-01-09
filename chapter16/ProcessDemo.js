const os = require('os');

console.log('Architecture ',process.arch);
console.log('Current Working Directory ',process.cwd());
console.log('CPU Usage',process.cpuUsage());
console.log('Memory Usage',process.memoryUsage());

console.log('OS Arch ',os.arch());
console.log('CPU Core ',os.cpus());
console.log('Endianess',os.endianness());
console.log('Free memory',os.freemem());
console.log('Newtwork interface',os.networkInterfaces());