import { addUrl } from "../repositories/urlRepositories.js";
import { nanoid } from "nanoid";

export async function postUrl(req, res) {
    const user = res.locals.user;
    console.log(user);
    const shortUrl = nanoid();
    const { url } = res.locals.body;
    const request = {
        userId: user.id,
        url,
        shortUrl
    };

    console.log(request);

    try {
        const result = await addUrl(request);

        res.status(201).send({ shortUrl });
    } catch (err) {
        res.status(500).send("postUrl: " + err);
    }
}