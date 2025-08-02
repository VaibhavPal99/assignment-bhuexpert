
import express, { Request, Response } from 'express';
import cors from 'cors';
import postRoute from "./routes/post";

const app = express();

app.use(cors({
  origin: '*'
}));

app.use(express.json());
app.use("/api/posts", postRoute);

export default app;
