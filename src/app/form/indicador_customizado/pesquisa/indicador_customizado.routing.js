"use strict";
var router_1 = require('@angular/router');
var indicador_customizado_component_1 = require('./indicador_customizado.component');
var indicador_customizado_routes = [{ path: 'indicador_customizado*', pathMatch: 'full', redirectTo: '/indicador_customizado' }, { path: 'indicador_customizado', component: indicador_customizado_component_1.Indicador_customizadoComponent }];
exports.indicador_customizado_routing = router_1.RouterModule.forChild(indicador_customizado_routes);
//# sourceMappingURL=indicador_customizado.routing.js.map