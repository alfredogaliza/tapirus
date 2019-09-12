import Mongoose from "mongoose";

const name = "unidade";

const schema = Mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    sigla: {
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