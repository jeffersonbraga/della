"use strict";
var router_1 = require('@angular/router');
var modulo_indicadores_component_1 = require('./modulo_indicadores.component');
var modulo_indicadores_routes = [{ path: 'modulo_indicadores*', pathMatch: 'full', redirectTo: '/modulo_indicadores' }, { path: 'modulo_indicadores', component: modulo_indicadores_component_1.Modulo_indicadoresComponent }];
exports.modulo_indicadores_routing = router_1.RouterModule.forChild(modulo_indicadores_routes);
//# sourceMappingURL=modulo_indicadores.routing.js.map