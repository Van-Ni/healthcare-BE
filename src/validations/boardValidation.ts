// #express : Node-Express Boilerplates For Building RESTful API's
// https://dev.to/rhuzaifa/top-5-node-express-boilerplates-for-building-restful-api-s-1ehl

import Joi from "joi";
import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from "http-status-codes";

const createNew = async (req: Request, res: Response, next: NextFunction) => {
    const customMessages = {
        'string.base': '{#label} phải là một chuỗi.',
        'string.empty': '{#label} không được để trống.',
        'string.min': '{#label} phải chứa ít nhất {#limit} ký tự.',
        'string.max': '{#label} không được vượt quá {#limit} ký tự.',
        'any.required': '{#label} là bắt buộc.',
    };

    const correctCondition = Joi.object({
        title: Joi.string().required().min(10).max(50).trim().strict().messages(customMessages),
        description: Joi.string().required().min(10).max(256).trim().strict().messages(customMessages),
    });
    try {
        console.log(req.body);
        await correctCondition.validateAsync(req.body, { abortEarly: false });
        res.status(StatusCodes.CREATED).send('POST from Validation : /v1/boards');
    } catch (error) {
        console.log("error", error);
        // console.log("new Error", new Error(error as string));
        res.status(StatusCodes.UNPROCESSABLE_ENTITY).json({ error: new Error(error as string).message });
    }
}
export const boardValidation = {
    createNew
}