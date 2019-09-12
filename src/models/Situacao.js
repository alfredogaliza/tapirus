import Mongoose from "mongoose";

const name = "situacao";

const schema = Mongoose.Schema({
    descricao: {
        type: String,
        required: true
    }
});

const model = Mongoose.model(name, schema, "situacoes");

export default {
    name,
    model,
    schema
};