import Mongoose from "mongoose";
import Atendimento from "./Atendimento";
import Cidade from "./Cidade";
import Bairro from "./Bairro";
import Caracteristica from "./Caracteristica";
import MeioChamada from "./Meio";
import Unidade from "./Unidade";
import Situacao from "./Situacao";

const name = "ocorrencia";

const schema = Mongoose.Schema({
    atendimento: {
        type: Mongoose.SchemaTypes.ObjectId,
        ref: Atendimento.model,
        required: true,
    },
    cidade: {
        type: Mongoose.SchemaTypes.ObjectId,
        ref: Cidade.model,
        required: true,
    },
    bairro: {
        type: Mongoose.SchemaTypes.ObjectId,
        ref: Bairro.model,
        required: true,
    },
    unidade: {
        type: Mongoose.SchemaTypes.ObjectId,
        ref: Unidade.model,
        required: true,
    },
    caracteristica: {
        type: Mongoose.SchemaTypes.ObjectId,
        ref: Caracteristica.model,
        required: true,
    },
    meio: {
        type: Mongoose.SchemaTypes.ObjectId,
        ref: MeioChamada.model,
        required: true,
    },
    situacao: {
        type: Mongoose.SchemaTypes.ObjectId,
        ref: Situacao.model,
        required: true,
    },
    data: {
        type: Date,
        required: true
    },
    endereco: {
        type: String,
        required: true
    },
    numero: {
        type: String,
        required: true
    },
    cep: {
        type: String,
        validate: /^[0-9]{5}\-[0-9]{3}$/,
        required: false
    },
    complemento: String,
    referencia: String,
    solicitante: {
        type: String,
        required: true
    },
    telefone: {
        type: String,
        validate: /^\([0-9]{2}\) [0-9]{4,5}\-[0-9]{4}$/
    },
    latitude: Number,
    longitude: Number,
    horaChamada: Date,
    horaLocal: Date,
    horaTermino: Date,
    historico: String,
    dadosComplementares: String,
    nomeResponsavel: {
        type: String,
        required: true
    },
    cargoResponsavel: {
        type: String,
        required: true
    },
    rgResponsavel: {
        type: String,
        required: true
    },
    nivelGravidade: {
        type: Number,
        min: 1,
        max: 3,
        required: true
    }
});

const model = Mongoose.model(name, schema);

export default {
    name,
    model,
    schema
};