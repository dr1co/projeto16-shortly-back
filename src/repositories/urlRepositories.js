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

export async function getUrlById(id) {
    return connection.query(`
        SELECT * FROM "shortened-urls"
        WHERE "id" = $1
    `,
        [id]
    );
}

export async function getUrlByShortUrl(shortUrl) {
    return connection.query(`
        SELECT * FROM "shortened-urls"
        WHERE "shortUrl" = $1
    `,
        [shortUrl]
    );
}

export async function getUserUrl(userId, urlId) {
    return connection.query(`
        SELECT * FROM "shortened-urls"
        WHERE "id" = $1 AND "userId" = $2
    `,
        [
            urlId,
            userId
        ]
    );
}

export async function updateVisitCounter(id) {
    return connection.query(`
        UPDATE "shortened-urls"
        SET "visitCount" = "visitCount" + 1
        WHERE "id" = $1
    `
        [id]
    );
}

export async function deleteUrlById(id) {
    return connection.query(`
        DELETE FROM "shortened-urls"
        WHERE "id" = $1
    `,
        [id]
    );
}

export async function getUserAllUrls(userId) {
    return connection.query(`
        SELECT * FROM "shortened-urls"
        WHERE "userId" = $1
    `,
        [userId]
    )
}
