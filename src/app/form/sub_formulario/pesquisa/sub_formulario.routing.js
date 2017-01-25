"use strict";
var router_1 = require('@angular/router');
var sub_formulario_component_1 = require('./sub_formulario.component');
var sub_formulario_routes = [{ path: 'sub_formulario*', pathMatch: 'full', redirectTo: '/sub_formulario' }, { path: 'sub_formulario', component: sub_formulario_component_1.Sub_formularioComponent }];
exports.sub_formulario_routing = router_1.RouterModule.forChild(sub_formulario_routes);
//# sourceMappingURL=sub_formulario.routing.js.map