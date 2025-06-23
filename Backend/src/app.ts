import express from 'express';
import userRouter from './routes/auth-route';
import corsMiddleware from './configs/cors';


const app = express();
const PORT = process.env.PORT;

app.use(corsMiddleware)


app.use(express.json())

app.use("/api", userRouter);

app.listen(PORT, () => {
   console.log("server is running on port", PORT);
});
