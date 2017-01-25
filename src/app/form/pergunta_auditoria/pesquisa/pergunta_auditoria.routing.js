"use strict";
var router_1 = require('@angular/router');
var pergunta_auditoria_component_1 = require('./pergunta_auditoria.component');
var pergunta_auditoria_routes = [{ path: 'pergunta_auditoria*', pathMatch: 'full', redirectTo: '/pergunta_auditoria' }, { path: 'pergunta_auditoria', component: pergunta_auditoria_component_1.Pergunta_auditoriaComponent }];
exports.pergunta_auditoria_routing = router_1.RouterModule.forChild(pergunta_auditoria_routes);
//# sourceMappingURL=pergunta_auditoria.routing.js.map