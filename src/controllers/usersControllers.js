import bcrypt from 'bcrypt';
import { v4 as uuid } from 'uuid';
import { addUser, updateUserToken } from "../repositories/userRepositories.js";

export async function postUser(req, res) {
    const signup = res.locals.body;
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

export async function loginUser(req, res) {
    const user = res.locals.body;
    const newToken = uuid();
    
    try {
        const result = await updateUserToken(user.email, newToken);

        res.status(200).send({...user, token: newToken});
    } catch (err) {
        res.status(500).send("loginUser: " + err);
    }
}