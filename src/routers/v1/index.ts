import { Request, Response, NextFunction } from 'express';
import express from 'express';
import { StatusCodes } from 'http-status-codes';
import { boardRoutes } from './boardRoutes';

const Router = express.Router();

Router.get('/status', (req: Request, res: Response, next: NextFunction) => {
    try {
        // #package: http-status-codes
        res.status(StatusCodes.OK).json({
            message: "ok ni"
        });
    } catch (error) {
        next(error);
    }
});

// Board APIs
Router.use("/boards", boardRoutes)

export const API_V1 = Router;