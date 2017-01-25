"use strict";
var router_1 = require('@angular/router');
var executar_manutencao_dados_component_1 = require('./executar_manutencao_dados.component');
var executar_manutencao_dadosDetails_component_1 = require('./executar_manutencao_dadosDetails.component');
var executar_manutencao_dadosEdit_component_1 = require('./executar_manutencao_dadosEdit.component');
var executar_manutencao_dados_routes = [{ path: '', component: executar_manutencao_dados_component_1.Executar_manutencaoDadosComponent, children: [{ path: 'details', component: executar_manutencao_dadosDetails_component_1.Executar_manutencaoDadosDetailsComponent }, { path: 'edit', component: executar_manutencao_dadosEdit_component_1.Executar_manutencaoDadosEditComponent }] }];
exports.executar_manutencao_dados_routing = router_1.RouterModule.forChild(executar_manutencao_dados_routes);
//# sourceMappingURL=executar_manutencao_dados.routing.js.map