"use strict";
var router_1 = require('@angular/router');
var classificacao_auditoria_component_1 = require('./classificacao_auditoria.component');
var classificacao_auditoria_routes = [{ path: 'classificacao_auditoria*', pathMatch: 'full', redirectTo: '/classificacao_auditoria' }, { path: 'classificacao_auditoria', component: classificacao_auditoria_component_1.Classificacao_auditoriaComponent }];
exports.classificacao_auditoria_routing = router_1.RouterModule.forChild(classificacao_auditoria_routes);
//# sourceMappingURL=classificacao_auditoria.routing.js.map