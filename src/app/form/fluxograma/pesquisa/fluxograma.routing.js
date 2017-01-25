"use strict";
var router_1 = require('@angular/router');
var fluxograma_component_1 = require('./fluxograma.component');
var fluxograma_routes = [{ path: 'fluxograma*', pathMatch: 'full', redirectTo: '/fluxograma' }, { path: 'fluxograma', component: fluxograma_component_1.FluxogramaComponent }];
exports.fluxograma_routing = router_1.RouterModule.forChild(fluxograma_routes);
//# sourceMappingURL=fluxograma.routing.js.map