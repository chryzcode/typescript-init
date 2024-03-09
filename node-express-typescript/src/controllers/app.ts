import { StatusCodes } from "http-status-codes";
import dotenv from "dotenv";
import OpenAI from "openai";

dotenv.config();

const openai: OpenAI = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export const testApi = async (req: any, res: any) => {
  const { message } = req.body;
  if (!message) {
    throw new Error("Message input is required");
  }
  const completion = await openai.chat.completions.create({
    messages: [{ role: "system", content: message }],
    model: "gpt-3.5-turbo",
  });
  console.log(completion.choices[0]);
  res.status(StatusCodes.OK).json({ completion });
};

export const test = async (req: Request, res: any) => {
  res.status(StatusCodes.OK).json({ hi: "hello" });
};
