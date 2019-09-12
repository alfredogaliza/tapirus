"use strict";

var _polyfill = _interopRequireDefault(require("@babel/polyfill"));

var _express = _interopRequireDefault(require("express"));

var _mongoose = _interopRequireDefault(require("mongoose"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _Ocorrencia = _interopRequireDefault(require("./models/Ocorrencia"));

var _Atendimento = _interopRequireDefault(require("./models/Atendimento"));

var _Cidade = _interopRequireDefault(require("./models/Cidade"));

var _Bairro = _interopRequireDefault(require("./models/Bairro"));

var _CaracteristicaLocal = _interopRequireDefault(require("./models/CaracteristicaLocal"));

var _MeioChamada = _interopRequireDefault(require("./models/MeioChamada"));

var _Situacao = _interopRequireDefault(require("./models/Situacao"));

var _Unidade = _interopRequireDefault(require("./models/Unidade"));

var _route = _interopRequireDefault(require("./route"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_mongoose["default"].connect("mongodb://database/siscob");

var app = (0, _express["default"])();
app.use(_bodyParser["default"].json());
app.use(_bodyParser["default"].urlencoded({
  extended: true
}));
(0, _route["default"])(app, _Ocorrencia["default"].name, _Ocorrencia["default"].model);
(0, _route["default"])(app, _Atendimento["default"].name, _Atendimento["default"].model);
(0, _route["default"])(app, _Cidade["default"].name, _Cidade["default"].model);
(0, _route["default"])(app, _Bairro["default"].name, _Bairro["default"].model);
(0, _route["default"])(app, _CaracteristicaLocal["default"].name, _CaracteristicaLocal["default"].model);
(0, _route["default"])(app, _MeioChamada["default"].name, _MeioChamada["default"].model);
(0, _route["default"])(app, _Situacao["default"].name, _Situacao["default"].model);
(0, _route["default"])(app, _Unidade["default"].name, _Unidade["default"].model);
app.listen(3000, function () {
  console.log("Listening at :3000...");
});