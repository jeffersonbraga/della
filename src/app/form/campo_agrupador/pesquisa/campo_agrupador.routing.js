"use strict";
var router_1 = require('@angular/router');
var campo_agrupador_component_1 = require('./campo_agrupador.component');
var campo_agrupador_routes = [{ path: 'campo_agrupador*', pathMatch: 'full', redirectTo: '/campo_agrupador' }, { path: 'campo_agrupador', component: campo_agrupador_component_1.Campo_agrupadorComponent }];
exports.campo_agrupador_routing = router_1.RouterModule.forChild(campo_agrupador_routes);
//# sourceMappingURL=campo_agrupador.routing.js.map