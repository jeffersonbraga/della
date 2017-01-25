"use strict";
var router_1 = require('@angular/router');
var categoria_ocorrencia_component_1 = require('./categoria_ocorrencia.component');
var categoria_ocorrencia_routes = [{ path: 'categoria_ocorrencia*', pathMatch: 'full', redirectTo: '/categoria_ocorrencia' }, { path: 'categoria_ocorrencia', component: categoria_ocorrencia_component_1.Categoria_ocorrenciaComponent }];
exports.categoria_ocorrencia_routing = router_1.RouterModule.forChild(categoria_ocorrencia_routes);
//# sourceMappingURL=categoria_ocorrencia.routing.js.map