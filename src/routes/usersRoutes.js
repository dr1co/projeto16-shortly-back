import express from 'express';
import validateSchema from '../middlewares/schemaMIddleware.js';
import { postUser } from '../controllers/usersControllers.js';
import signupSchema from '../schemas/signUpSchema.js';

const userRouter = express.Router();

userRouter.post("/signup", validateSchema(signupSchema), postUser);

export default userRouter;