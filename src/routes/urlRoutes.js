import express from 'express';
import validateSchema from '../middlewares/schemaMiddleware.js';
import { validateUser } from '../middlewares/validateUserMiddleware.js';
import { urlSchema } from '../schemas/urlSchemas.js';
import { postUrl, getSingleUrl, openShortUrl } from '../controllers/urlControllers.js';
import { locateUrl } from '../middlewares/locateUrlMiddleware.js';

const urlRouter = express.Router();

urlRouter.post("/urls/shorten", validateUser, validateSchema(urlSchema), postUrl);
urlRouter.get("/urls/:id", getSingleUrl);
urlRouter.get("/urls/open/:shortUrl", locateUrl, openShortUrl);

export default urlRouter;
