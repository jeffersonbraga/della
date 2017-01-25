"use strict";
var router_1 = require('@angular/router');
var cronograma_auditoria_component_1 = require('./cronograma_auditoria.component');
var cronograma_auditoria_routes = [{ path: 'cronograma_auditoria*', pathMatch: 'full', redirectTo: '/cronograma_auditoria' }, { path: 'cronograma_auditoria', component: cronograma_auditoria_component_1.Cronograma_auditoriaComponent }];
exports.cronograma_auditoria_routing = router_1.RouterModule.forChild(cronograma_auditoria_routes);
//# sourceMappingURL=cronograma_auditoria.routing.js.map