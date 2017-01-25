"use strict";
var router_1 = require('@angular/router');
var ocorrencia_component_1 = require('./ocorrencia.component');
var ocorrencia_routes = [{ path: 'ocorrencia*', pathMatch: 'full', redirectTo: '/ocorrencia' }, { path: 'ocorrencia', component: ocorrencia_component_1.OcorrenciaComponent }];
exports.ocorrencia_routing = router_1.RouterModule.forChild(ocorrencia_routes);
//# sourceMappingURL=ocorrencia.routing.js.map