"use strict";
var router_1 = require('@angular/router');
var evidencia_resposta_exec_dados_component_1 = require('./evidencia_resposta_exec_dados.component');
var evidencia_resposta_exec_dadosDetails_component_1 = require('./evidencia_resposta_exec_dadosDetails.component');
var evidencia_resposta_exec_dadosEdit_component_1 = require('./evidencia_resposta_exec_dadosEdit.component');
var evidencia_resposta_exec_dados_routes = [{ path: '', component: evidencia_resposta_exec_dados_component_1.Evidencia_resposta_execDadosComponent, children: [{ path: 'details', component: evidencia_resposta_exec_dadosDetails_component_1.Evidencia_resposta_execDadosDetailsComponent }, { path: 'edit', component: evidencia_resposta_exec_dadosEdit_component_1.Evidencia_resposta_execDadosEditComponent }] }];
exports.evidencia_resposta_exec_dados_routing = router_1.RouterModule.forChild(evidencia_resposta_exec_dados_routes);
//# sourceMappingURL=evidencia_resposta_exec_dados.routing.js.map