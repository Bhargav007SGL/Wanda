const fs = require('fs')
const dir = 'Demo';
if (fs.existsSync(dir)) {
    fs.rm(dir, { recursive: true }, (err) => {
        if (err) {
            throw err;
        }
        console.log(`${dir} is deleted!`);
    })
} else { console.log(`Not`); } fs.rm('aa.js', { recursive: true }, (err) => { if (err) { throw err; } console.log(`is deleted!`); })

