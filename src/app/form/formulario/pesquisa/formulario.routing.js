"use strict";
var router_1 = require('@angular/router');
var formulario_component_1 = require('./formulario.component');
var formulario_routes = [{ path: 'formulario*', pathMatch: 'full', redirectTo: '/formulario' }, { path: 'formulario', component: formulario_component_1.FormularioComponent }];
exports.formulario_routing = router_1.RouterModule.forChild(formulario_routes);
//# sourceMappingURL=formulario.routing.js.map