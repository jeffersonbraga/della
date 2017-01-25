"use strict";
var router_1 = require('@angular/router');
var escalonamento_usuario_component_1 = require('./escalonamento_usuario.component');
var escalonamento_usuario_routes = [{ path: 'escalonamento_usuario*', pathMatch: 'full', redirectTo: '/escalonamento_usuario' }, { path: 'escalonamento_usuario', component: escalonamento_usuario_component_1.Escalonamento_usuarioComponent }];
exports.escalonamento_usuario_routing = router_1.RouterModule.forChild(escalonamento_usuario_routes);
//# sourceMappingURL=escalonamento_usuario.routing.js.map