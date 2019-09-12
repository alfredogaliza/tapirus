import Mongoose from "mongoose";
import Permission from "./Permission";

const name = "role";

const schema = Mongoose.Schema({
    name:  {
        type: String,
        required: true
    },
    description:  {
        type: String,
        required: false
    },
    permissions: [{
        type: Mongoose.SchemaTypes.ObjectId,
        ref: Permission.model
    }],
});

const model = Mongoose.model(name, schema);

export default {
    name,
    model,
    schema
};