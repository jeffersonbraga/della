"use strict";
var router_1 = require('@angular/router');
var empresa_component_1 = require('./empresa.component');
var empresa_routes = [{ path: 'empresa*', pathMatch: 'full', redirectTo: '/empresa' }, { path: 'empresa', component: empresa_component_1.EmpresaComponent }];
exports.empresa_routing = router_1.RouterModule.forChild(empresa_routes);
//# sourceMappingURL=empresa.routing.js.map