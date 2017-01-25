"use strict";
var router_1 = require('@angular/router');
var tipo_turno_dados_component_1 = require('./tipo_turno_dados.component');
var tipo_turno_dadosDetails_component_1 = require('./tipo_turno_dadosDetails.component');
var tipo_turno_dadosEdit_component_1 = require('./tipo_turno_dadosEdit.component');
var tipo_turno_dados_routes = [{ path: '', component: tipo_turno_dados_component_1.Tipo_turnoDadosComponent, children: [{ path: 'details', component: tipo_turno_dadosDetails_component_1.Tipo_turnoDadosDetailsComponent }, { path: 'edit', component: tipo_turno_dadosEdit_component_1.Tipo_turnoDadosEditComponent }] }];
exports.tipo_turno_dados_routing = router_1.RouterModule.forChild(tipo_turno_dados_routes);
//# sourceMappingURL=tipo_turno_dados.routing.js.map