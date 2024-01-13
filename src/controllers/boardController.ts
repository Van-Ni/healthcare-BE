import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from "http-status-codes";


const createNew = async (req: Request, res: Response, next: NextFunction) => {
    try {
        res.status(StatusCodes.CREATED).send('POST from Validation : /v1/boards');
    } catch (error) {
        next(error);
    }
}
export const boardController = {
    createNew
}