"use strict";
var router_1 = require('@angular/router');
var registro_treinamento_dados_component_1 = require('./registro_treinamento_dados.component');
var registro_treinamento_dadosDetails_component_1 = require('./registro_treinamento_dadosDetails.component');
var registro_treinamento_dadosEdit_component_1 = require('./registro_treinamento_dadosEdit.component');
var registro_treinamento_dados_routes = [{ path: '', component: registro_treinamento_dados_component_1.Registro_treinamentoDadosComponent, children: [{ path: 'details', component: registro_treinamento_dadosDetails_component_1.Registro_treinamentoDadosDetailsComponent }, { path: 'edit', component: registro_treinamento_dadosEdit_component_1.Registro_treinamentoDadosEditComponent }] }];
exports.registro_treinamento_dados_routing = router_1.RouterModule.forChild(registro_treinamento_dados_routes);
//# sourceMappingURL=registro_treinamento_dados.routing.js.map