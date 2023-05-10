import Joi from 'joi';
// const shortid = require('shortid');
 
// console.log(shortid.generate());
// console.log(Joi);

export const passwordSchema = Joi.string().min(3).max(30).alphanum();

// console.log(passwordSchema.validate('g450ffgfgfgfg'));

// export default 15;