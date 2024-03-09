import express, { Express, Request, Response, Application } from "express";
import dotenv from "dotenv";

import appRouter from "./routes/app" 

//For env File
dotenv.config();

const app: Application = express();
const port = process.env.PORT || 8000;

app.use(appRouter)

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("A TS app");
});
 
const start = async () => {
  try {
    // await mongoose.connect(process.env.MONGO_URI);
    app.listen(port, () => console.log(`server is running on port ${port}`));
  } catch (error) {
    console.log(error);
  }
};

start()
