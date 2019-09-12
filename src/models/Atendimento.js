import Mongoose from "mongoose";

const name = "atendimento";

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