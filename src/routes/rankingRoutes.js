import express from 'express';
import { getUsersRanking } from '../controllers/rankingControllers.js';

const rankingRouter = express.Router();

rankingRouter.get("/ranking", getUsersRanking);

export default rankingRouter;