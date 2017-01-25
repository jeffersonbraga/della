"use strict";
var router_1 = require('@angular/router');
var compra_component_1 = require('./compra.component');
var compra_routes = [{ path: 'compra*', pathMatch: 'full', redirectTo: '/compra' }, { path: 'compra', component: compra_component_1.CompraComponent }];
exports.compra_routing = router_1.RouterModule.forChild(compra_routes);
//# sourceMappingURL=compra.routing.js.map