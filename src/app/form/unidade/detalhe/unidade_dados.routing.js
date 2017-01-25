"use strict";
var router_1 = require('@angular/router');
var unidade_dados_component_1 = require('./unidade_dados.component');
var unidade_dadosDetails_component_1 = require('./unidade_dadosDetails.component');
var unidade_dadosEdit_component_1 = require('./unidade_dadosEdit.component');
var unidade_dados_routes = [{ path: '', component: unidade_dados_component_1.UnidadeDadosComponent, children: [{ path: 'details', component: unidade_dadosDetails_component_1.UnidadeDadosDetailsComponent }, { path: 'edit', component: unidade_dadosEdit_component_1.UnidadeDadosEditComponent }] }];
exports.unidade_dados_routing = router_1.RouterModule.forChild(unidade_dados_routes);
//# sourceMappingURL=unidade_dados.routing.js.map