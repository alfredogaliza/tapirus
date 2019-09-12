"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

var _Cidade = _interopRequireDefault(require("./Cidade"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var name = "bairro";

var schema = _mongoose["default"].Schema({
  nome: String,
  cidade: _Cidade["default"].schema
});

var model = _mongoose["default"].model(name, schema);

var _default = {
  name: name,
  model: model,
  schema: schema
};
exports["default"] = _default;