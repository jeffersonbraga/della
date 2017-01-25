"use strict";
var router_1 = require('@angular/router');
var pais_component_1 = require('./pais.component');
var pais_routes = [{ path: 'pais*', pathMatch: 'full', redirectTo: '/pais' }, { path: 'pais', component: pais_component_1.PaisComponent }];
exports.pais_routing = router_1.RouterModule.forChild(pais_routes);
//# sourceMappingURL=pais.routing.js.map