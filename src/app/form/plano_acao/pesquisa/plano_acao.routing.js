"use strict";
var router_1 = require('@angular/router');
var plano_acao_component_1 = require('./plano_acao.component');
var plano_acao_routes = [{ path: 'plano_acao*', pathMatch: 'full', redirectTo: '/plano_acao' }, { path: 'plano_acao', component: plano_acao_component_1.Plano_acaoComponent }];
exports.plano_acao_routing = router_1.RouterModule.forChild(plano_acao_routes);
//# sourceMappingURL=plano_acao.routing.js.map