//==============================================================
const colors = require('colors')
setInterval(() => {
    if(!client || !client.user) {
    console.log("The Client Didn't Login Proccesing Kill 1".brightRed)
        process.kill(1);
    } else {
        console.log("The Client Has Logged In Successfully".brightGreen)
    }
}, 10000); 

const express = require('express');
const app = express();
app.get('/', (req, res) => {
  res.send('I am online now!')
});
app.listen(4200, () => {
  console.log('Server started.');
});
//==============================================================
const MusicBot = require("./structures/MusicClient.js");
const client = new MusicBot();
module.exports = client; 
client._loadPlayer()
client._loadClientEvents()
client._loadNodeEvents()
client._loadPlayerEvents()
client._loadSlashCommands()
client.connect()

process.on('unhandledRejection', (reason, p) => {
    console.log(reason, p);
});

process.on('uncaughtException', (err, origin) => {
    console.log(err, origin);
});

process.on('uncaughtExceptionMonitor', (err, origin) => {
    console.log(err, origin);
});

process.on('multipleResolves', (type, promise, reason) => {
    console.log(type, promise, reason);
});

require('node:http')
  .createServer((_, res) =>
    res.end(
      `Developed by DIWAS ATREYA`,
    ),
  )
  .listen(8080);