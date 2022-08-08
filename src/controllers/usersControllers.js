import bcrypt from 'bcrypt';
import { v4 as uuid } from 'uuid';
import { addUser, updateUserToken } from "../repositories/userRepositories.js";
import { getUserAllUrls } from '../repositories/urlRepositories.js';

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

export async function getUserData(req, res) {
    const { id, name } = res.locals.user;

    try {
        const result = await getUserAllUrls(id);
        
        let sum = 0;
        result.rows.map(v => sum += v.visitCount);

        const data = {
            id,
            name,
            visitCount: sum,
            shortenedUrls: result.rows
        };

        res.status(200).send(data);
    } catch (err) {
        res.status(500).send("getUserData " + err);
    }
}
