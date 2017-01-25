"use strict";
var router_1 = require('@angular/router');
var fabricante_component_1 = require('./fabricante.component');
var fabricante_routes = [{ path: 'fabricante*', pathMatch: 'full', redirectTo: '/fabricante' }, { path: 'fabricante', component: fabricante_component_1.FabricanteComponent }];
exports.fabricante_routing = router_1.RouterModule.forChild(fabricante_routes);
//# sourceMappingURL=fabricante.routing.js.map