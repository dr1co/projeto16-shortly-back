import express from 'express';
import validateSchema from '../middlewares/schemaMiddleware.js';
import { validateUser } from '../middlewares/validateUserMiddleware.js';
import { urlSchema } from '../schemas/urlSchemas.js';
import { postUrl, getSingleUrl, openShortUrl, deleteUrl } from '../controllers/urlControllers.js';
import { locateUrlById, locateUrlByShortUrl, selectUserUrl } from '../middlewares/locateUrlMiddleware.js';

const urlRouter = express.Router();

urlRouter.post("/urls/shorten", validateUser, validateSchema(urlSchema), postUrl);
urlRouter.get("/urls/:id", getSingleUrl);
urlRouter.get("/urls/open/:shortUrl", locateUrlByShortUrl, openShortUrl);
urlRouter.delete("/urls/:id", validateUser, locateUrlById, selectUserUrl, deleteUrl);

export default urlRouter;
