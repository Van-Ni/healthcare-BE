import { Request, Response, NextFunction } from 'express';
import express from 'express';
import { StatusCodes } from 'http-status-codes';
import { boardRoute } from './boardRoute';

const Router = express.Router();

// Board APIs
Router.use("/boards", boardRoute)

export const API_V1 = Router;