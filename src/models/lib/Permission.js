import Mongoose from "mongoose";

const name = "permission";

const schema = Mongoose.Schema({
    name:  {
        type: String,
        required: true
    },
    description:  {
        type: String,
        required: false
    }
});

const model = Mongoose.model(name, schema);

export default {
    name,
    model,
    schema
};