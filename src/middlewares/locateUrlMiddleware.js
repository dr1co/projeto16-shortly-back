import { getUrlById, getUrlByShortUrl, getUserUrl } from "../repositories/urlRepositories.js";

export async function locateUrlByShortUrl(req, res, next) {
    const { shortUrl } = req.params;

    try {
        const result = await getUrlByShortUrl(shortUrl);

        if (result.rows.length === 0) {
            return res.sendStatus(404);
        }

        res.locals.url = result.rows[0];
        next();
    } catch (err) {
        res.status(500).send("locateUrlByShortUrl: " + err);
    }
}

export async function locateUrlById(req, res, next) {
    const { id } = req.params;

    try {
        const result = await getUrlById(id);

        if (result.rows.length === 0) {
            return res.sendStatus(404);
        }

        next();
    } catch (err) {
        res.status(500).send("locateUrlById: " + err);
    }
}

export async function selectUserUrl(req, res, next) {
    const user = res.locals.user;
    const urlId = req.params.id;

    try {
        const result = await getUserUrl(user.id, urlId);

        if (result.rows.length === 0) {
            return res.sendStatus(401);
        }

        res.locals.urlId = urlId;
        next();
    } catch (err) {
        res.status(500).send("selectUserUrl: " + err);
    }
}
