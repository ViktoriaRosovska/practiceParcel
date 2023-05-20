import './css/style.css';
// const express = require('express');

// const app = express();

// app.use('*', (rec, res) => {
//     console.log('Был запрос от браузера');
//     res.send('<h1>Отвечаю браузеру: Hello</h1>');
// })
// const listener = app.listen(4444, () => {
//     console.log(`сервер запущен на порте ${listener.address().port}`);
// })
// import passwordSchema from "../js/module1";
// console.log(passwordSchema.validate('g450ffgfgfgfg'));

import _ from 'lodash';
import * as module1 from './js/module1';

console.log(module1.passwordSchema.validate('g45nbbnv786767gfgfg'));
console.log(_.add(2, 8));



const logger = time => {
    console.log(`лог через ${time} секунд, потому что не отменили таймаут ${Date.now()}`);
};
const timerId = setTimeout(logger, 2000, 1000);
console.log(timerId);
const timer2Id = setTimeout(logger, 2000, 1000);
console.log(timer2Id);

const shouldCancelTimer = Math.random() > 0.3;
console.log(shouldCancelTimer);

if (shouldCancelTimer) {
    clearTimeout(timerId);
}


const timer3Id = setInterval(logger, 2000, 2000);
clearInterval(timer3Id);