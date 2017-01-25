"use strict";
var router_1 = require('@angular/router');
var acao_preventiva_component_1 = require('./acao_preventiva.component');
var acao_preventiva_routes = [{ path: 'acao_preventiva*', pathMatch: 'full', redirectTo: '/acao_preventiva' }, { path: 'acao_preventiva', component: acao_preventiva_component_1.Acao_preventivaComponent }];
exports.acao_preventiva_routing = router_1.RouterModule.forChild(acao_preventiva_routes);
//# sourceMappingURL=acao_preventiva.routing.js.map