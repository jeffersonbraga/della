"use strict";
var router_1 = require('@angular/router');
var campo_dados_component_1 = require('./campo_dados.component');
var campo_dadosDetails_component_1 = require('./campo_dadosDetails.component');
var campo_dadosEdit_component_1 = require('./campo_dadosEdit.component');
var campo_dados_routes = [{ path: '', component: campo_dados_component_1.CampoDadosComponent, children: [{ path: 'details', component: campo_dadosDetails_component_1.CampoDadosDetailsComponent }, { path: 'edit', component: campo_dadosEdit_component_1.CampoDadosEditComponent }] }];
exports.campo_dados_routing = router_1.RouterModule.forChild(campo_dados_routes);
//# sourceMappingURL=campo_dados.routing.js.map