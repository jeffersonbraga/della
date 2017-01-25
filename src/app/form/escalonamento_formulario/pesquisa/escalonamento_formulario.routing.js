"use strict";
var router_1 = require('@angular/router');
var escalonamento_formulario_component_1 = require('./escalonamento_formulario.component');
var escalonamento_formulario_routes = [{ path: 'escalonamento_formulario*', pathMatch: 'full', redirectTo: '/escalonamento_formulario' }, { path: 'escalonamento_formulario', component: escalonamento_formulario_component_1.Escalonamento_formularioComponent }];
exports.escalonamento_formulario_routing = router_1.RouterModule.forChild(escalonamento_formulario_routes);
//# sourceMappingURL=escalonamento_formulario.routing.js.map