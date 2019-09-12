"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

var _Atendimento = _interopRequireDefault(require("./Atendimento"));

var _Cidade = _interopRequireDefault(require("./Cidade"));

var _Bairro = _interopRequireDefault(require("./Bairro"));

var _CaracteristicaLocal = _interopRequireDefault(require("./CaracteristicaLocal"));

var _MeioChamada = _interopRequireDefault(require("./MeioChamada"));

var _Unidade = _interopRequireDefault(require("./Unidade"));

var _Situacao = _interopRequireDefault(require("./Situacao"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var name = "ocorrencia";

var schema = _mongoose["default"].Schema({
  atendimento: _Atendimento["default"].schema,
  cidade: _Cidade["default"].schema,
  bairro: _Bairro["default"].schema,
  unidade: _Unidade["default"].schema,
  caracteristicaLocal: _CaracteristicaLocal["default"].schema,
  meioChamada: _MeioChamada["default"].schema,
  situacao: _Situacao["default"].schema,
  data: Date,
  endereco: String,
  numero: String,
  cep: String,
  complemento: String,
  referencia: String,
  solicitante: String,
  telefone: String,
  latitude: Number,
  longitude: Number,
  horaChamada: Date,
  horaLocal: Date,
  horaTermino: Date,
  historico: String,
  dadosComplementares: String,
  nome_responsavel: String,
  cargo_responsavel: String,
  rg_responsavel: String,
  nivelGravidade: Number
});

var model = _mongoose["default"].model(name, schema);

var _default = {
  name: name,
  model: model,
  schema: schema
};
exports["default"] = _default;