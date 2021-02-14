const fs = require('fs')

const data = fs.readFileSync('./sample.json')

console.log(JSON.parse(data))
