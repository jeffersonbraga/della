"use strict";
var router_1 = require('@angular/router');
var usuario_setor_dados_component_1 = require('./usuario_setor_dados.component');
var usuario_setor_dadosDetails_component_1 = require('./usuario_setor_dadosDetails.component');
var usuario_setor_dadosEdit_component_1 = require('./usuario_setor_dadosEdit.component');
var usuario_setor_dados_routes = [{ path: '', component: usuario_setor_dados_component_1.Usuario_setorDadosComponent, children: [{ path: 'details', component: usuario_setor_dadosDetails_component_1.Usuario_setorDadosDetailsComponent }, { path: 'edit', component: usuario_setor_dadosEdit_component_1.Usuario_setorDadosEditComponent }] }];
exports.usuario_setor_dados_routing = router_1.RouterModule.forChild(usuario_setor_dados_routes);
//# sourceMappingURL=usuario_setor_dados.routing.js.map