"use strict";
var router_1 = require('@angular/router');
var grupo_formulario_component_1 = require('./grupo_formulario.component');
var grupo_formulario_routes = [{ path: 'grupo_formulario*', pathMatch: 'full', redirectTo: '/grupo_formulario' }, { path: 'grupo_formulario', component: grupo_formulario_component_1.Grupo_formularioComponent }];
exports.grupo_formulario_routing = router_1.RouterModule.forChild(grupo_formulario_routes);
//# sourceMappingURL=grupo_formulario.routing.js.map