import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import userRouter from './routes/usersRoutes.js';
import urlRouter from './routes/urlRoutes.js';
import rankingRouter from './routes/rankingRoutes.js';
dotenv.config();

const PORT = process.env.PORT || 5000;

const server = express();

server.use(cors());
server.use(express.json());

server.use(userRouter);
server.use(urlRouter);
server.use(rankingRouter);

server.listen(PORT, () => {
    console.log("Servidor funcionando na porta " + PORT);
});
