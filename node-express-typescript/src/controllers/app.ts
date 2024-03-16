import { StatusCodes } from "http-status-codes";
import dotenv from "dotenv";
import { GoogleGenerativeAI } from "@google/generative-ai";

dotenv.config();
const genAI = new GoogleGenerativeAI("process.env.GEMINI_API_Key");

export const testApi = async (req: any, res: any) => {
  const { message } = req.body;
  if (!message) {
    throw new Error("Message input is required");
  }

  res.status(StatusCodes.OK).json({ message });
};

export const test = async (req: Request, res: any) => {
  res.status(StatusCodes.OK).json({ hi: "hello" });
};
