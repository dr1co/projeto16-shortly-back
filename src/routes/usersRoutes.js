import express from 'express';
import validateSchema from '../middlewares/schemaMiddleware.js';
import { locateUser } from '../middlewares/locateUserMiddleware.js';
import { postUser, loginUser } from '../controllers/usersControllers.js';
import { signinSchema, signupSchema } from '../schemas/userSchemas.js';

const userRouter = express.Router();

userRouter.post("/signup", validateSchema(signupSchema), postUser);
userRouter.post("/signin", validateSchema(signinSchema), locateUser, loginUser);

export default userRouter;