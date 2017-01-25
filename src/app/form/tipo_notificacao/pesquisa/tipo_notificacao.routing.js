"use strict";
var router_1 = require('@angular/router');
var tipo_notificacao_component_1 = require('./tipo_notificacao.component');
var tipo_notificacao_routes = [{ path: 'tipo_notificacao*', pathMatch: 'full', redirectTo: '/tipo_notificacao' }, { path: 'tipo_notificacao', component: tipo_notificacao_component_1.Tipo_notificacaoComponent }];
exports.tipo_notificacao_routing = router_1.RouterModule.forChild(tipo_notificacao_routes);
//# sourceMappingURL=tipo_notificacao.routing.js.map