"use strict";
var router_1 = require('@angular/router');
var auditoria_component_1 = require('./auditoria.component');
var auditoria_routes = [{ path: 'auditoria*', pathMatch: 'full', redirectTo: '/auditoria' }, { path: 'auditoria', component: auditoria_component_1.AuditoriaComponent }];
exports.auditoria_routing = router_1.RouterModule.forChild(auditoria_routes);
//# sourceMappingURL=auditoria.routing.js.map