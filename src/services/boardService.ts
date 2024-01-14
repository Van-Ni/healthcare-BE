import { slugify } from "../utils/formatters";

import { boardModel } from "../models/boardModel"
const createNew = async (boardData: any) => {
    try {
        const newBoard: any = {
            ...boardData,
            name: slugify(boardData.title),
        };
        const createdBoard = await boardModel.createNew(newBoard);
        const foundBoard = await boardModel.findBoardById(createdBoard.insertedId);
        return foundBoard;
    } catch (error) {
        throw error;
    }
}
export const boardService = {
    createNew
}