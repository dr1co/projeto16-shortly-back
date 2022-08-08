import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import userRouter from './routes/usersRoutes.js';
dotenv.config();

const PORT = process.env.PORT || 5000;

const server = express();

server.use(cors());
server.use(express.json());

server.use(userRouter);

server.listen(PORT, () => {
    console.log("Servidor funcionando na porta " + PORT);
});
