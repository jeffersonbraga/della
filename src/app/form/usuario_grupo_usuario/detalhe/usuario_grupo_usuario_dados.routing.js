"use strict";
var router_1 = require('@angular/router');
var usuario_grupo_usuario_dados_component_1 = require('./usuario_grupo_usuario_dados.component');
var usuario_grupo_usuario_dadosDetails_component_1 = require('./usuario_grupo_usuario_dadosDetails.component');
var usuario_grupo_usuario_dadosEdit_component_1 = require('./usuario_grupo_usuario_dadosEdit.component');
var usuario_grupo_usuario_dados_routes = [{ path: '', component: usuario_grupo_usuario_dados_component_1.Usuario_grupo_usuarioDadosComponent, children: [{ path: 'details', component: usuario_grupo_usuario_dadosDetails_component_1.Usuario_grupo_usuarioDadosDetailsComponent }, { path: 'edit', component: usuario_grupo_usuario_dadosEdit_component_1.Usuario_grupo_usuarioDadosEditComponent }] }];
exports.usuario_grupo_usuario_dados_routing = router_1.RouterModule.forChild(usuario_grupo_usuario_dados_routes);
//# sourceMappingURL=usuario_grupo_usuario_dados.routing.js.map