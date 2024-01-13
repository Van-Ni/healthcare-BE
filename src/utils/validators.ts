
// #express: How to validate for ObjectID
// https://stackoverflow.com/questions/57658864/how-to-validate-for-objectid

import Joi from "joi"
// If you want a TypeScript version of the above library integrated with Express without installing anything: 
export const JoiObjectId = (message = 'valid id') => Joi.string().regex(/^[0-9a-fA-F]{24}$/, message) // id: JoiObjectId().required(),
export const OBJECT_ID_RULE = /^[0-9a-fA-F]{24}$/
export const OBJECT_ID_RULE_MESSAGE = 'Your string fails to match the Object Id pattern!'