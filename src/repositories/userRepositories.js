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
    )
};
