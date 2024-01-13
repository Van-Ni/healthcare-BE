import { slugify } from "../utils/formatters";

const createNew = async (boardData: any) => {
    try {
        const newBoard: any = {
            ...boardData,
            name: slugify(boardData.title),
        };

        return newBoard;
    } catch (error) {
        throw error;
    }
}
export const boardService = {
    createNew
}