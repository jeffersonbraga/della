"use strict";
var router_1 = require('@angular/router');
var sistema_component_1 = require('./sistema.component');
var sistema_routes = [{ path: 'sistema*', pathMatch: 'full', redirectTo: '/sistema' }, { path: 'sistema', component: sistema_component_1.SistemaComponent }];
exports.sistema_routing = router_1.RouterModule.forChild(sistema_routes);
//# sourceMappingURL=sistema.routing.js.map