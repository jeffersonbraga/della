"use strict";
var router_1 = require('@angular/router');
var execucao_auditoria_dados_component_1 = require('./execucao_auditoria_dados.component');
var execucao_auditoria_dadosDetails_component_1 = require('./execucao_auditoria_dadosDetails.component');
var execucao_auditoria_dadosEdit_component_1 = require('./execucao_auditoria_dadosEdit.component');
var execucao_auditoria_dados_routes = [{ path: '', component: execucao_auditoria_dados_component_1.Execucao_auditoriaDadosComponent, children: [{ path: 'details', component: execucao_auditoria_dadosDetails_component_1.Execucao_auditoriaDadosDetailsComponent }, { path: 'edit', component: execucao_auditoria_dadosEdit_component_1.Execucao_auditoriaDadosEditComponent }] }];
exports.execucao_auditoria_dados_routing = router_1.RouterModule.forChild(execucao_auditoria_dados_routes);
//# sourceMappingURL=execucao_auditoria_dados.routing.js.map