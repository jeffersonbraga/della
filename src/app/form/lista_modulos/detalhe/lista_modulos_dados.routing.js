"use strict";
var router_1 = require('@angular/router');
var lista_modulos_dados_component_1 = require('./lista_modulos_dados.component');
var lista_modulos_dadosDetails_component_1 = require('./lista_modulos_dadosDetails.component');
var lista_modulos_dadosEdit_component_1 = require('./lista_modulos_dadosEdit.component');
var lista_modulos_dados_routes = [{ path: '', component: lista_modulos_dados_component_1.Lista_modulosDadosComponent, children: [{ path: 'details', component: lista_modulos_dadosDetails_component_1.Lista_modulosDadosDetailsComponent }, { path: 'edit', component: lista_modulos_dadosEdit_component_1.Lista_modulosDadosEditComponent }] }];
exports.lista_modulos_dados_routing = router_1.RouterModule.forChild(lista_modulos_dados_routes);
//# sourceMappingURL=lista_modulos_dados.routing.js.map