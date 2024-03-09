import { StatusCodes } from "http-status-codes";

export const test = async(req: Request, res: any) => {
    res.status(StatusCodes.OK).json({'hi':'hello'});
};
