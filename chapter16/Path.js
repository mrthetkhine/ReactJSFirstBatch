const path = require('path');

console.log('CWD ',process.cwd());
console.log('Filename ',__filename);
console.log('DirName ',__dirname);

console.log('Seperator ',path.sep);

let p = '../chapter16/Path.js';
console.log('base name ', path.basename(p));
console.log('ext name ', path.extname(p));
console.log('dirbase name ', path.basename(path.dirname(p)));
console.log('base name ', path.basename(p));
console.log('Normalize ',path.normalize(p));

console.log('Normalize ',path.normalize('a/b/c/../../d'));
console.log('Path.join ', path.join('src','some','test.js'));
console.log('Path.resolve', path.resolve('../chapter16','Path.js'));