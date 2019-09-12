import Mongoose from "mongoose";
import Cidade from "./Cidade";

const name = "bairro";

const schema = Mongoose.Schema({
    nome:  {
        type: String,
        required: true
    },
    cidade_id: {
        type: Mongoose.SchemaTypes.ObjectId,    
        ref: Cidade.model,
        required: true
    }
});

const model = Mongoose.model(name, schema);

export default {
    name,
    model,
    schema
};