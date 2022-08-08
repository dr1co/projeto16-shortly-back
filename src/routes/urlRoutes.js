import express from 'express';
import validateSchema from '../middlewares/schemaMiddleware.js';
import { validateUser } from '../middlewares/validateUserMiddleware.js';
import { urlSchema } from '../schemas/urlSchemas.js';
import { postUrl, getSingleUrl } from '../controllers/urlControllers.js';

const urlRouter = express.Router();

urlRouter.post("/urls/shorten", validateUser, validateSchema(urlSchema), postUrl);
urlRouter.get("/urls/:id", getSingleUrl)

export default urlRouter;
