"use strict";
var router_1 = require('@angular/router');
var modulo_component_1 = require('./modulo.component');
var modulo_routes = [{ path: 'modulo*', pathMatch: 'full', redirectTo: '/modulo' }, { path: 'modulo', component: modulo_component_1.ModuloComponent }];
exports.modulo_routing = router_1.RouterModule.forChild(modulo_routes);
//# sourceMappingURL=modulo.routing.js.map