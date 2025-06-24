import dotenv from "dotenv"
import express from 'express';
dotenv.config();
import userRouter from './routes/auth-route';
import corsMiddleware from './configs/cors';
import threadRouter from "./routes/thread-route";


const app = express();
const PORT = process.env.PORT;

app.use(corsMiddleware)


app.use(express.json())

app.use("/api", userRouter, threadRouter);

app.listen(PORT, () => {
   console.log("server is running on port", PORT);
});
