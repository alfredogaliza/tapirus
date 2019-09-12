import Mongoose from "mongoose";

const name = "cidade";

const schema = Mongoose.Schema({
    nome: {
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