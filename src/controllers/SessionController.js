import { Router } from "express";
import uuidv1 from "uuid/v1";

import session from "../services/session";
import User from "../models/lib/User";

const router = new Router();

router.post(`/session/logon`, (request, response) => {
    const credentials = {
        login: request.body.login,
        password: request.body.password
    };
    User.model.findOne(credentials, (error, user) => {
        if (error) response.status(500).send(error);
        else if (user) {
            user.populate({
                path: "roles",
                populate: {
                    path: "permissions"
                }
            }, (error, user) => {
                if (error) response.status(500).send(error);
                else {
                    const session_id = uuidv1();
                    const session_data = {
                        user: user,
                    };
                    session.set(session_id, session_data).save();
                    response.send({id: session_id, data: session_data});
                }
            });                
        } else {
            response.status(401).send({error: "Unauthorized"});
        }
    });
});

router.get(`/session/logoff`, (request, response) => {
    session.destroy( (error, result) => {
        response.send({result});
    });
});

export default router;