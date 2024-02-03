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