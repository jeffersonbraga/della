"use strict";
var router_1 = require('@angular/router');
var campo_component_1 = require('./campo.component');
var campo_routes = [{ path: 'campo*', pathMatch: 'full', redirectTo: '/campo' }, { path: 'campo', component: campo_component_1.CampoComponent }];
exports.campo_routing = router_1.RouterModule.forChild(campo_routes);
//# sourceMappingURL=campo.routing.js.map