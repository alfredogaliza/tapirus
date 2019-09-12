import Express from "express";
import BodyParser from "body-parser";
import { connect } from "./services/database";

import Logging from "./middlewares/logging";
import Authentication from "./middlewares/authentication";

import SessionController from "./controllers/SessionController";
import ModelController from "./controllers/ModelController";

import Models from "./models";
import Role from "./models/lib/Role";
import Permission from "./models/lib/Permission";
import User from "./models/lib/User";

import session from "./services/session";

const app = Express();

connect();

app.use(BodyParser.json());
app.use(BodyParser.urlencoded({ extended: true }));

app.use(Logging);
app.use(Authentication);

app.use(SessionController);
app.use(ModelController(User.model, User.name));
app.use(ModelController(Role.model, Role.name));
app.use(ModelController(Permission.model, Permission.name));

Models.forEach(model =>
    app.use(ModelController(model.model, model.name))
);

app.get("/test", (request, response, next) => {
    response.send({ok: session.hasPermission("SHOW USER"), data: session.data});
})

app.listen(3000, () => {
    console.log("Listening at :3000...");
});