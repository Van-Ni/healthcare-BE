import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from "http-status-codes";


const createNew = async (req: Request, res: Response, next: NextFunction) => {
    try {
        console.log(req);
        res.status(StatusCodes.CREATED).send('POST from Validation : /v1/boards');
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: new Error(error as string).message });
    }
}
export const boardController = {
    createNew
}