"use strict";
var router_1 = require('@angular/router');
var operacao_notificacao_component_1 = require('./operacao_notificacao.component');
var operacao_notificacao_routes = [{ path: 'operacao_notificacao*', pathMatch: 'full', redirectTo: '/operacao_notificacao' }, { path: 'operacao_notificacao', component: operacao_notificacao_component_1.Operacao_notificacaoComponent }];
exports.operacao_notificacao_routing = router_1.RouterModule.forChild(operacao_notificacao_routes);
//# sourceMappingURL=operacao_notificacao.routing.js.map