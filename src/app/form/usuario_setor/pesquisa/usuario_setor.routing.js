"use strict";
var router_1 = require('@angular/router');
var usuario_setor_component_1 = require('./usuario_setor.component');
var usuario_setor_routes = [{ path: 'usuario_setor*', pathMatch: 'full', redirectTo: '/usuario_setor' }, { path: 'usuario_setor', component: usuario_setor_component_1.Usuario_setorComponent }];
exports.usuario_setor_routing = router_1.RouterModule.forChild(usuario_setor_routes);
//# sourceMappingURL=usuario_setor.routing.js.map