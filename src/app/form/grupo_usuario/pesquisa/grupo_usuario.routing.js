"use strict";
var router_1 = require('@angular/router');
var grupo_usuario_component_1 = require('./grupo_usuario.component');
var grupo_usuario_routes = [{ path: 'grupo_usuario*', pathMatch: 'full', redirectTo: '/grupo_usuario' }, { path: 'grupo_usuario', component: grupo_usuario_component_1.Grupo_usuarioComponent }];
exports.grupo_usuario_routing = router_1.RouterModule.forChild(grupo_usuario_routes);
//# sourceMappingURL=grupo_usuario.routing.js.map