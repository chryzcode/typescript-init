import express, { Express, Request, Response, Application } from "express";
import dotenv from "dotenv";

import appRouter from "./routes/app" 

//For env File
dotenv.config();

const app: Application = express();
const port = process.env.PORT || 8000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get("/", (req: Request, res: Response) => {
  res.send("A TS app");
});

app.use('/api/v1/prompt', appRouter)
 
const start = async () => {
  try {
    // await mongoose.connect(process.env.MONGO_URI);
    app.listen(port, () => console.log(`server is running on port ${port}`));
  } catch (error) {
    console.log(error);
  }
};

start()
