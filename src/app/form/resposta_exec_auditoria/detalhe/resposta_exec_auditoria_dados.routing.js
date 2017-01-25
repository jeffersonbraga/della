"use strict";
var router_1 = require('@angular/router');
var resposta_exec_auditoria_dados_component_1 = require('./resposta_exec_auditoria_dados.component');
var resposta_exec_auditoria_dadosDetails_component_1 = require('./resposta_exec_auditoria_dadosDetails.component');
var resposta_exec_auditoria_dadosEdit_component_1 = require('./resposta_exec_auditoria_dadosEdit.component');
var resposta_exec_auditoria_dados_routes = [{ path: '', component: resposta_exec_auditoria_dados_component_1.Resposta_exec_auditoriaDadosComponent, children: [{ path: 'details', component: resposta_exec_auditoria_dadosDetails_component_1.Resposta_exec_auditoriaDadosDetailsComponent }, { path: 'edit', component: resposta_exec_auditoria_dadosEdit_component_1.Resposta_exec_auditoriaDadosEditComponent }] }];
exports.resposta_exec_auditoria_dados_routing = router_1.RouterModule.forChild(resposta_exec_auditoria_dados_routes);
//# sourceMappingURL=resposta_exec_auditoria_dados.routing.js.map