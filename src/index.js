const createServer = require('./createServer');
const path = require('path');
const fs = require('fs');
const rootDir = path.resolve(process.cwd())

//load process.env variables from .env file
require('dotenv').config();

const port = process.env.PORT;
let sslKeys = undefined;

if(process.env.HTTPS === 'true') {
   sslKeys = {
    cert: fs.readFileSync(path.join(rootDir, process.env.CERT)),
    key: fs.readFileSync(path.join(rootDir, process.env.KEY))
  }
}

//create server.
const {app, server} = createServer(port, sslKeys);

module.exports = {app, server}