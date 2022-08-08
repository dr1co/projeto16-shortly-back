import connection from "../database/postgresql.js";

export async function getRanking() {
    return connection.query(`
        SELECT
            users.id,
            users.name,
            COUNT("shortened-urls".id) AS "linksCount",
            SUM("shortened-urls"."visitCount") AS "visitCount"
        FROM users JOIN "shortened-urls" ON users.id = "shortened-urls"."userId"
        GROUP BY users.id, users.name
        ORDER BY "visitCount" DESC
        LIMIT 10
    `);
}