"use strict";
var router_1 = require('@angular/router');
var setor_dados_component_1 = require('./setor_dados.component');
var setor_dadosDetails_component_1 = require('./setor_dadosDetails.component');
var setor_dadosEdit_component_1 = require('./setor_dadosEdit.component');
var setor_dados_routes = [{ path: '', component: setor_dados_component_1.SetorDadosComponent, children: [{ path: 'details', component: setor_dadosDetails_component_1.SetorDadosDetailsComponent }, { path: 'edit', component: setor_dadosEdit_component_1.SetorDadosEditComponent }] }];
exports.setor_dados_routing = router_1.RouterModule.forChild(setor_dados_routes);
//# sourceMappingURL=setor_dados.routing.js.map