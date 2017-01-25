"use strict";
var router_1 = require('@angular/router');
var acao_corretiva_component_1 = require('./acao_corretiva.component');
var acao_corretiva_routes = [{ path: 'acao_corretiva*', pathMatch: 'full', redirectTo: '/acao_corretiva' }, { path: 'acao_corretiva', component: acao_corretiva_component_1.Acao_corretivaComponent }];
exports.acao_corretiva_routing = router_1.RouterModule.forChild(acao_corretiva_routes);
//# sourceMappingURL=acao_corretiva.routing.js.map