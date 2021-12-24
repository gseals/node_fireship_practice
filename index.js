const { readFile } = require('fs').promises;

const express = require('express');

const app = express();

app.get('/', async (request, response) => {

  response.send( await readFile('./home.html', 'utf8') );

});
// app.get('/', (request, response) => {

//   readFile('./home.html', 'utf8', (err, html) => {

//   if (err) {
//     response.status(500).send('sorry, out of order')
//   }
//     response.send(html);

//   })
// });

app.listen(process.env.PORT || 3000, () => console.log('App available on http://localhost:3000'))

// const myModule = require('./my-module')

// console.log(myModule);
// const { readFile } = require('fs').promises;

// async function hello() {
//   const file = await readFile('./hello.txt', 'utf8');
// }

// const { readFile, readFileSync } = require('fs');

// // const txt = readFileSync('./hello.txt', 'utf8');
// readFile('./hello.txt', 'utf8', (err, txt) => {

//   console.log(txt)

// });
// // `console.log(txt)
// console.log('do this ASAP')

// const { EventEmitter } = require('events');
// const eventEmitter = new EventEmitter();

// eventEmitter.on('lunch', () => {

//   console.log('yum')
// })

// eventEmitter.emit('lunch');

// console.log('hello world 👋');

// global.luckyNum = '23';

// console.log(global.luckyNum);

// console.log(process.platform);

// console.log(process.env.USER);
