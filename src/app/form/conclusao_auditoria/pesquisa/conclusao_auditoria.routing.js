"use strict";
var router_1 = require('@angular/router');
var conclusao_auditoria_component_1 = require('./conclusao_auditoria.component');
var conclusao_auditoria_routes = [{ path: 'conclusao_auditoria*', pathMatch: 'full', redirectTo: '/conclusao_auditoria' }, { path: 'conclusao_auditoria', component: conclusao_auditoria_component_1.Conclusao_auditoriaComponent }];
exports.conclusao_auditoria_routing = router_1.RouterModule.forChild(conclusao_auditoria_routes);
//# sourceMappingURL=conclusao_auditoria.routing.js.map