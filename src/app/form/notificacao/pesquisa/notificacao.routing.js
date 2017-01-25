"use strict";
var router_1 = require('@angular/router');
var notificacao_component_1 = require('./notificacao.component');
var notificacao_routes = [{ path: 'notificacao*', pathMatch: 'full', redirectTo: '/notificacao' }, { path: 'notificacao', component: notificacao_component_1.NotificacaoComponent }];
exports.notificacao_routing = router_1.RouterModule.forChild(notificacao_routes);
//# sourceMappingURL=notificacao.routing.js.map