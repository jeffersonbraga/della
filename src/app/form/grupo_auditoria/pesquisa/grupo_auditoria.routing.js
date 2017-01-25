"use strict";
var router_1 = require('@angular/router');
var grupo_auditoria_component_1 = require('./grupo_auditoria.component');
var grupo_auditoria_routes = [{ path: 'grupo_auditoria*', pathMatch: 'full', redirectTo: '/grupo_auditoria' }, { path: 'grupo_auditoria', component: grupo_auditoria_component_1.Grupo_auditoriaComponent }];
exports.grupo_auditoria_routing = router_1.RouterModule.forChild(grupo_auditoria_routes);
//# sourceMappingURL=grupo_auditoria.routing.js.map