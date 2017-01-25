"use strict";
var router_1 = require('@angular/router');
var ocorrencia_ouvidoria_component_1 = require('./ocorrencia_ouvidoria.component');
var ocorrencia_ouvidoria_routes = [{ path: 'ocorrencia_ouvidoria*', pathMatch: 'full', redirectTo: '/ocorrencia_ouvidoria' }, { path: 'ocorrencia_ouvidoria', component: ocorrencia_ouvidoria_component_1.Ocorrencia_ouvidoriaComponent }];
exports.ocorrencia_ouvidoria_routing = router_1.RouterModule.forChild(ocorrencia_ouvidoria_routes);
//# sourceMappingURL=ocorrencia_ouvidoria.routing.js.map