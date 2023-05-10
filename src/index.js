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