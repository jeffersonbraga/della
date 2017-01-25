"use strict";
var router_1 = require('@angular/router');
var usuario_dados_component_1 = require('./usuario_dados.component');
var usuario_dadosDetails_component_1 = require('./usuario_dadosDetails.component');
var usuario_dadosEdit_component_1 = require('./usuario_dadosEdit.component');
var usuario_dados_routes = [{ path: '', component: usuario_dados_component_1.UsuarioDadosComponent, children: [{ path: 'details', component: usuario_dadosDetails_component_1.UsuarioDadosDetailsComponent }, { path: 'edit', component: usuario_dadosEdit_component_1.UsuarioDadosEditComponent }] }];
exports.usuario_dados_routing = router_1.RouterModule.forChild(usuario_dados_routes);
//# sourceMappingURL=usuario_dados.routing.js.map