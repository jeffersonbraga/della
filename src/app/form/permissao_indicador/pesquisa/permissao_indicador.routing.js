"use strict";
var router_1 = require('@angular/router');
var permissao_indicador_component_1 = require('./permissao_indicador.component');
var permissao_indicador_routes = [{ path: 'permissao_indicador*', pathMatch: 'full', redirectTo: '/permissao_indicador' }, { path: 'permissao_indicador', component: permissao_indicador_component_1.Permissao_indicadorComponent }];
exports.permissao_indicador_routing = router_1.RouterModule.forChild(permissao_indicador_routes);
//# sourceMappingURL=permissao_indicador.routing.js.map