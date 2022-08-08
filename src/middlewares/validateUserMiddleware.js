import { getUserByToken } from "../repositories/userRepositories.js";

export async function validateUser(req, res, next) {
    const { authorization } = req.headers;
    const token = authorization?.replace("Bearer ", "");
    
    if (!token) {
        return res.sendStatus(401);
    }

    try {
        const result = await getUserByToken(token);

        if (result.rows.length === 0) {
            return res.sendStatus(404);
        }

        res.locals.user = result.rows[0];
        next();
    } catch (err) {
        res.status(500).send("validateUser: " + err);
    }
}
