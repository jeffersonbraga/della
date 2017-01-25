"use strict";
var router_1 = require('@angular/router');
var programa_dados_component_1 = require('./programa_dados.component');
var programa_dadosDetails_component_1 = require('./programa_dadosDetails.component');
var programa_dadosEdit_component_1 = require('./programa_dadosEdit.component');
var programa_dados_routes = [{ path: '', component: programa_dados_component_1.ProgramaDadosComponent, children: [{ path: 'details', component: programa_dadosDetails_component_1.ProgramaDadosDetailsComponent }, { path: 'edit', component: programa_dadosEdit_component_1.ProgramaDadosEditComponent }] }];
exports.programa_dados_routing = router_1.RouterModule.forChild(programa_dados_routes);
//# sourceMappingURL=programa_dados.routing.js.map