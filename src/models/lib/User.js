import Mongoose from "mongoose";
import crypto from "crypto";

import Role from "./Role";

const hashMD5 = value => crypto.createHash("md5").update(value).digest("hex");

const name = "user";

const schema = Mongoose.Schema({
    login: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        set: value => hashMD5(value)
    },
    roles: [{
        type: Mongoose.SchemaTypes.ObjectId,
        ref: Role.model
    }]
});

const model = Mongoose.model(name, schema);

export default {
    name,
    schema,
    model
}
