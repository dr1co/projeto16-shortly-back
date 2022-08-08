import { addUrl, getUrlById } from "../repositories/urlRepositories.js";
import { nanoid } from "nanoid";

export async function postUrl(req, res) {
    const user = res.locals.user;
    const shortUrl = nanoid();
    const { url } = res.locals.body;
    const request = {
        userId: user.id,
        url,
        shortUrl
    };

    try {
        const result = await addUrl(request);

        res.status(201).send({ shortUrl });
    } catch (err) {
        res.status(500).send("postUrl: " + err);
    }
}

export async function getSingleUrl(req, res) {
    const { id } = req.params;

    try {
        const result = await getUrlById(id);

        if (result.rows.length === 0) {
            return res.sendStatus(404);
        }

        const response = {
            id: result.rows[0].id,
            shortUrl: result.rows[0].shortUrl,
            url: result.rows[0].url
        };

        res.status(200).send(response);
    } catch (err) {
        res.status(500).send("getSingleUrl: " + err);
    }
}
