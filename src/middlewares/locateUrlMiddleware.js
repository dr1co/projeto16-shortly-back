import { getUrlByShortUrl } from "../repositories/urlRepositories.js";

export async function locateUrl(req, res, next) {
    const { shortUrl } = req.params;

    try {
        const result = await getUrlByShortUrl(shortUrl);

        if (result.rows.length === 0) {
            return res.sendStatus(404);
        }

        res.locals.url = result.rows[0];
        next();
    } catch (err) {
        res.status(500).send("getSingleUrl: " + err);
    } 
}