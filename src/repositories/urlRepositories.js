import connection from "../database/postgresql.js";

export async function addUrl({userId, url, shortUrl}) {
    return connection.query(`
        INSERT INTO "shortened-urls" ("userId", "url", "shortUrl")
        VALUES ($1, $2, $3)
    `,
        [
            userId,
            url,
            shortUrl
        ]
    );
}