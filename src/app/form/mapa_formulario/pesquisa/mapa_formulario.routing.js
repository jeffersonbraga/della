"use strict";
var router_1 = require('@angular/router');
var mapa_formulario_component_1 = require('./mapa_formulario.component');
var mapa_formulario_routes = [{ path: 'mapa_formulario*', pathMatch: 'full', redirectTo: '/mapa_formulario' }, { path: 'mapa_formulario', component: mapa_formulario_component_1.Mapa_formularioComponent }];
exports.mapa_formulario_routing = router_1.RouterModule.forChild(mapa_formulario_routes);
//# sourceMappingURL=mapa_formulario.routing.js.map