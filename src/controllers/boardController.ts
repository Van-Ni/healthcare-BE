import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from "http-status-codes";
import { boardService } from '../services/boardService';


const createNew = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const newBoard = await boardService.createNew(req.body);
        
        res.status(StatusCodes.CREATED).json({
            status: StatusCodes.CREATED,
            data: newBoard
        });
    } catch (error) {
        next(error);
    }
}
export const boardController = {
    createNew
}