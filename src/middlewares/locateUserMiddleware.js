import { getUserByEmail } from "../repositories/userRepositories.js";

export async function locateUser(req, res, next) {
    const user = res.locals.body;

    try {
        const result = await getUserByEmail(user.email);

        if (result.rows.length === 0) {
            return res.sendStatus(401);
        }

        next();
    } catch (err) {
        return res.status(500).send("locateUser: " + err);
    }
}
