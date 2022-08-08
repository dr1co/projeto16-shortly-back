import bcrypt from 'bcrypt';
import { addUser } from "../repositories/userRepositories.js";

export async function postUser(req, res) {
    const signup = res.locals.body;
    console.log(signup);
    const encrypted = bcrypt.hashSync(signup.password, 10);

    const newUser = {
        name: signup.name,
        email: signup.email,
        password: encrypted
    };

    try {
        const result = await addUser(newUser);

        res.sendStatus(201);
    } catch (err) {
        res.status(500).send("postUser: " + err);
    }
}
