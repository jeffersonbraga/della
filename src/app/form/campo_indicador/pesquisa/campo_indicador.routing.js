"use strict";
var router_1 = require('@angular/router');
var campo_indicador_component_1 = require('./campo_indicador.component');
var campo_indicador_routes = [{ path: 'campo_indicador*', pathMatch: 'full', redirectTo: '/campo_indicador' }, { path: 'campo_indicador', component: campo_indicador_component_1.Campo_indicadorComponent }];
exports.campo_indicador_routing = router_1.RouterModule.forChild(campo_indicador_routes);
//# sourceMappingURL=campo_indicador.routing.js.map