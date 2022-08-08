import express from 'express';
import validateSchema from '../middlewares/schemaMiddleware.js';
import { locateUser } from '../middlewares/locateUserMiddleware.js';
import { postUser, loginUser, getUserData } from '../controllers/usersControllers.js';
import { signinSchema, signupSchema } from '../schemas/userSchemas.js';
import { validateUser } from '../middlewares/validateUserMiddleware.js';

const userRouter = express.Router();

userRouter.post("/signup", validateSchema(signupSchema), postUser);
userRouter.post("/signin", validateSchema(signinSchema), locateUser, loginUser);
userRouter.get("/users/me", validateUser, getUserData);

export default userRouter;