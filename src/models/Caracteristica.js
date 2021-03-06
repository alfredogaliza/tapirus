import Mongoose from "mongoose";

const name = "caracteristica";

const schema = Mongoose.Schema({
    descricao: {
        type: String,
        required: true
    }
});

const model = Mongoose.model(name, schema);

export default {
    name,
    model,
    schema
};