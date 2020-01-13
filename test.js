process.env.NODE_ENV = 'test'

const resp = require('./index.js')

console.log(resp, process.env.TEST)
