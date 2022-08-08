import { getRanking } from "../repositories/rankingRepositories.js";

export async function getUsersRanking(req, res) {
    try {
        const result = await getRanking();

        res.status(200).send(result.rows);
    } catch (err) {
        res.status(500).send("getUsersRanking: " + err);
    }
}