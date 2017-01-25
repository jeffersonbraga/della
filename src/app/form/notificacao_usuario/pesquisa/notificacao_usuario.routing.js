"use strict";
var router_1 = require('@angular/router');
var notificacao_usuario_component_1 = require('./notificacao_usuario.component');
var notificacao_usuario_routes = [{ path: 'notificacao_usuario*', pathMatch: 'full', redirectTo: '/notificacao_usuario' }, { path: 'notificacao_usuario', component: notificacao_usuario_component_1.Notificacao_usuarioComponent }];
exports.notificacao_usuario_routing = router_1.RouterModule.forChild(notificacao_usuario_routes);
//# sourceMappingURL=notificacao_usuario.routing.js.map