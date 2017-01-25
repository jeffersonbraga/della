"use strict";
var router_1 = require('@angular/router');
var cliente_component_1 = require('./cliente.component');
var cliente_routes = [{ path: 'cliente*', pathMatch: 'full', redirectTo: '/cliente' }, { path: 'cliente', component: cliente_component_1.ClienteComponent }];
exports.cliente_routing = router_1.RouterModule.forChild(cliente_routes);
//# sourceMappingURL=cliente.routing.js.map