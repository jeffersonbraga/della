"use strict";
var router_1 = require('@angular/router');
var participantes_treinamento_dados_component_1 = require('./participantes_treinamento_dados.component');
var participantes_treinamento_dadosDetails_component_1 = require('./participantes_treinamento_dadosDetails.component');
var participantes_treinamento_dadosEdit_component_1 = require('./participantes_treinamento_dadosEdit.component');
var participantes_treinamento_dados_routes = [{ path: '', component: participantes_treinamento_dados_component_1.Participantes_treinamentoDadosComponent, children: [{ path: 'details', component: participantes_treinamento_dadosDetails_component_1.Participantes_treinamentoDadosDetailsComponent }, { path: 'edit', component: participantes_treinamento_dadosEdit_component_1.Participantes_treinamentoDadosEditComponent }] }];
exports.participantes_treinamento_dados_routing = router_1.RouterModule.forChild(participantes_treinamento_dados_routes);
//# sourceMappingURL=participantes_treinamento_dados.routing.js.map