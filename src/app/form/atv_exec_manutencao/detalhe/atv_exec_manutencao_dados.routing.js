"use strict";
var router_1 = require('@angular/router');
var atv_exec_manutencao_dados_component_1 = require('./atv_exec_manutencao_dados.component');
var atv_exec_manutencao_dadosDetails_component_1 = require('./atv_exec_manutencao_dadosDetails.component');
var atv_exec_manutencao_dadosEdit_component_1 = require('./atv_exec_manutencao_dadosEdit.component');
var atv_exec_manutencao_dados_routes = [{ path: '', component: atv_exec_manutencao_dados_component_1.Atv_exec_manutencaoDadosComponent, children: [{ path: 'details', component: atv_exec_manutencao_dadosDetails_component_1.Atv_exec_manutencaoDadosDetailsComponent }, { path: 'edit', component: atv_exec_manutencao_dadosEdit_component_1.Atv_exec_manutencaoDadosEditComponent }] }];
exports.atv_exec_manutencao_dados_routing = router_1.RouterModule.forChild(atv_exec_manutencao_dados_routes);
//# sourceMappingURL=atv_exec_manutencao_dados.routing.js.map