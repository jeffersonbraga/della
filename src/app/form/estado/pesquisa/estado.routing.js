"use strict";
var router_1 = require('@angular/router');
var estado_component_1 = require('./estado.component');
var estado_routes = [{ path: 'estado*', pathMatch: 'full', redirectTo: '/estado' }, { path: 'estado', component: estado_component_1.EstadoComponent }];
exports.estado_routing = router_1.RouterModule.forChild(estado_routes);
//# sourceMappingURL=estado.routing.js.map