"use strict";
var router_1 = require('@angular/router');
var lista_modulos_component_1 = require('./lista_modulos.component');
var lista_modulos_routes = [{ path: 'lista_modulos*', pathMatch: 'full', redirectTo: '/lista_modulos' }, { path: 'lista_modulos', component: lista_modulos_component_1.Lista_modulosComponent }];
exports.lista_modulos_routing = router_1.RouterModule.forChild(lista_modulos_routes);
//# sourceMappingURL=lista_modulos.routing.js.map