import { StatusCodes } from "http-status-codes";
import dotenv from "dotenv";
import axios from "axios";

dotenv.config();

export const testApi = async (req: any, res: any) => {
  const { message } = req.body;
  if (!message) {
    throw new Error("Message input is required");
  }

  const options = {
    method: "GET",
    url: "https://aeona3.p.rapidapi.com/",
    params: {
      text: message,
      userId: "12312312312",
    },
    headers: {
      "X-RapidAPI-Key": process.env.X_RapidAPI_Key,
      "X-RapidAPI-Host": "aeona3.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options);
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
};

export const test = async (req: Request, res: any) => {
  res.status(StatusCodes.OK).json({ hi: "hello" });
};
