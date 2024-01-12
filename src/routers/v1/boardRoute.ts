// File: boardRoute.ts

import express, { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { boardValidation } from 'validations/boardValidation';

const Router = express.Router();

// #express: Express.js router.route() Function
Router.route('/')
  .get((req: Request, res: Response) => {
    res.status(StatusCodes.OK).send('GET /v1/boards');
  })
  .post(boardValidation.createNew);

export const boardRoute = Router;