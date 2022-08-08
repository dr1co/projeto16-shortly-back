import connection from "../database/postgresql.js";

export async function addUser({name, email, password}) {
    return connection.query(`
        INSERT INTO "users" ("name", "email", "password")
        VALUES ($1, $2, $3)
    `,
        [
            name,
            email,
            password
        ]
    );
}

export async function getUserByEmail(email) {
    return connection.query(`
        SELECT * FROM "users" WHERE "email" = $1
    `,
        [email]
    );
}

export async function updateUserToken(email, token) {
    return connection.query(`
        UPDATE "users"
        SET "token" = $1
        WHERE "email" = $2
    `,
        [
            token,
            email
        ]
    );
}