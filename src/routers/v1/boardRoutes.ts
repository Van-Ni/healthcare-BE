// File: boardRoutes.ts

import express, { Request, Response, NextFunction } from 'express';
import { StatusCodes } from 'http-status-codes';

const Router = express.Router();

// #express: Express.js router.route() Function
Router.route('/')
  .get((req: Request, res: Response) => {
    res.status(StatusCodes.OK).send('GET /v1/boards');
  })
  .post((req: Request, res: Response) => {
    res.status(StatusCodes.CREATED).send('POST /v1/boards');
  });

export const boardRoutes = Router;