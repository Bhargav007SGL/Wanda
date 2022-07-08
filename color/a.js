const express = require('express')
const app = express()
const port = 3000
const fs = require('fs');
const os = require('os');
const { resolve } = require('path');
const cors = require('cors');
app.use(express.json())

app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.post('/csvGenerator', (req, res) => {
    if (fs.existsSync('a.txt')) {
        console.log(`Op`);
        fs.rm('a.txt', { recursive: true }, (err) => {
            if (err) {
                throw err;
            }
            var colorArray = req.body.colorArray;
            for (var i = 0; i < colorArray.length; i++) {
                fs.appendFile('a.txt', `value ${colorArray[i]["value"]} , id ${colorArray[i]["id"]} ${os.EOL}`, (err) => {
                    if (err) {
                        console.log(err);
                    }
                })
                console.log("1");
            }
            console.log(`a.txt is deleted!`);
        })
    }
    else {
        var colorArray = req.body.colorArray;
        for (var i = 0; i < colorArray.length; i++) {
            fs.appendFile('a.txt', colorArray[i] + os.EOL, (err) => {
                if (err) {
                    console.log(err);
                }
            })
            console.log("1");
        }
    }
    res.send(`Done`)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})