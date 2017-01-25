"use strict";
var router_1 = require('@angular/router');
var usuario_component_1 = require('./usuario.component');
var usuario_routes = [{ path: 'usuario*', pathMatch: 'full', redirectTo: '/usuario' }, { path: 'usuario', component: usuario_component_1.UsuarioComponent }];
exports.usuario_routing = router_1.RouterModule.forChild(usuario_routes);
//# sourceMappingURL=usuario.routing.js.map