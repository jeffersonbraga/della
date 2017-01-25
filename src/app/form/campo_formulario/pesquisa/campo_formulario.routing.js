"use strict";
var router_1 = require('@angular/router');
var campo_formulario_component_1 = require('./campo_formulario.component');
var campo_formulario_routes = [{ path: 'campo_formulario*', pathMatch: 'full', redirectTo: '/campo_formulario' }, { path: 'campo_formulario', component: campo_formulario_component_1.Campo_formularioComponent }];
exports.campo_formulario_routing = router_1.RouterModule.forChild(campo_formulario_routes);
//# sourceMappingURL=campo_formulario.routing.js.map