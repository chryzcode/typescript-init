import { StatusCodes } from "http-status-codes";
import dotenv from "dotenv";
import OpenAI from "openai";


const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

e

export const test = async(req: Request, res: any) => {
    res.status(StatusCodes.OK).json({'hi':'hello'});
};
