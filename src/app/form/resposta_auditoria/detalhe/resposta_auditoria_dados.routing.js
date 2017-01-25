"use strict";
var router_1 = require('@angular/router');
var resposta_auditoria_dados_component_1 = require('./resposta_auditoria_dados.component');
var resposta_auditoria_dadosDetails_component_1 = require('./resposta_auditoria_dadosDetails.component');
var resposta_auditoria_dadosEdit_component_1 = require('./resposta_auditoria_dadosEdit.component');
var resposta_auditoria_dados_routes = [{ path: '', component: resposta_auditoria_dados_component_1.Resposta_auditoriaDadosComponent, children: [{ path: 'details', component: resposta_auditoria_dadosDetails_component_1.Resposta_auditoriaDadosDetailsComponent }, { path: 'edit', component: resposta_auditoria_dadosEdit_component_1.Resposta_auditoriaDadosEditComponent }] }];
exports.resposta_auditoria_dados_routing = router_1.RouterModule.forChild(resposta_auditoria_dados_routes);
//# sourceMappingURL=resposta_auditoria_dados.routing.js.map