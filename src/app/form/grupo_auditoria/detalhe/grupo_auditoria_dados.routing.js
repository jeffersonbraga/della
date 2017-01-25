"use strict";
var router_1 = require('@angular/router');
var grupo_auditoria_dados_component_1 = require('./grupo_auditoria_dados.component');
var grupo_auditoria_dadosDetails_component_1 = require('./grupo_auditoria_dadosDetails.component');
var grupo_auditoria_dadosEdit_component_1 = require('./grupo_auditoria_dadosEdit.component');
var grupo_auditoria_dados_routes = [{ path: '', component: grupo_auditoria_dados_component_1.Grupo_auditoriaDadosComponent, children: [{ path: 'details', component: grupo_auditoria_dadosDetails_component_1.Grupo_auditoriaDadosDetailsComponent }, { path: 'edit', component: grupo_auditoria_dadosEdit_component_1.Grupo_auditoriaDadosEditComponent }] }];
exports.grupo_auditoria_dados_routing = router_1.RouterModule.forChild(grupo_auditoria_dados_routes);
//# sourceMappingURL=grupo_auditoria_dados.routing.js.map