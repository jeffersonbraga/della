"use strict";
var router_1 = require('@angular/router');
var tipo_campo_component_1 = require('./tipo_campo.component');
var tipo_campo_routes = [{ path: 'tipo_campo*', pathMatch: 'full', redirectTo: '/tipo_campo' }, { path: 'tipo_campo', component: tipo_campo_component_1.Tipo_campoComponent }];
exports.tipo_campo_routing = router_1.RouterModule.forChild(tipo_campo_routes);
//# sourceMappingURL=tipo_campo.routing.js.map