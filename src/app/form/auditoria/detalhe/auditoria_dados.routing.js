"use strict";
var router_1 = require('@angular/router');
var auditoria_dados_component_1 = require('./auditoria_dados.component');
var auditoria_dadosDetails_component_1 = require('./auditoria_dadosDetails.component');
var auditoria_dadosEdit_component_1 = require('./auditoria_dadosEdit.component');
var auditoria_dados_routes = [{ path: '', component: auditoria_dados_component_1.AuditoriaDadosComponent, children: [{ path: 'details', component: auditoria_dadosDetails_component_1.AuditoriaDadosDetailsComponent }, { path: 'edit', component: auditoria_dadosEdit_component_1.AuditoriaDadosEditComponent }] }];
exports.auditoria_dados_routing = router_1.RouterModule.forChild(auditoria_dados_routes);
//# sourceMappingURL=auditoria_dados.routing.js.map