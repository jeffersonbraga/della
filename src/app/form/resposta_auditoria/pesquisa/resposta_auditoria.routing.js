"use strict";
var router_1 = require('@angular/router');
var resposta_auditoria_component_1 = require('./resposta_auditoria.component');
var resposta_auditoria_routes = [{ path: 'resposta_auditoria*', pathMatch: 'full', redirectTo: '/resposta_auditoria' }, { path: 'resposta_auditoria', component: resposta_auditoria_component_1.Resposta_auditoriaComponent }];
exports.resposta_auditoria_routing = router_1.RouterModule.forChild(resposta_auditoria_routes);
//# sourceMappingURL=resposta_auditoria.routing.js.map