"use strict";
var router_1 = require('@angular/router');
var execucao_auditoria_component_1 = require('./execucao_auditoria.component');
var execucao_auditoria_routes = [{ path: 'execucao_auditoria*', pathMatch: 'full', redirectTo: '/execucao_auditoria' }, { path: 'execucao_auditoria', component: execucao_auditoria_component_1.Execucao_auditoriaComponent }];
exports.execucao_auditoria_routing = router_1.RouterModule.forChild(execucao_auditoria_routes);
//# sourceMappingURL=execucao_auditoria.routing.js.map