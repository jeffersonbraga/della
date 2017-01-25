"use strict";
var router_1 = require('@angular/router');
var funcao_usuario_component_1 = require('./funcao_usuario.component');
var funcao_usuario_routes = [{ path: 'funcao_usuario*', pathMatch: 'full', redirectTo: '/funcao_usuario' }, { path: 'funcao_usuario', component: funcao_usuario_component_1.Funcao_usuarioComponent }];
exports.funcao_usuario_routing = router_1.RouterModule.forChild(funcao_usuario_routes);
//# sourceMappingURL=funcao_usuario.routing.js.map