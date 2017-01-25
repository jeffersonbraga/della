"use strict";
var router_1 = require('@angular/router');
var processo_fluxo_component_1 = require('./processo_fluxo.component');
var processo_fluxo_routes = [{ path: 'processo_fluxo*', pathMatch: 'full', redirectTo: '/processo_fluxo' }, { path: 'processo_fluxo', component: processo_fluxo_component_1.Processo_fluxoComponent }];
exports.processo_fluxo_routing = router_1.RouterModule.forChild(processo_fluxo_routes);
//# sourceMappingURL=processo_fluxo.routing.js.map