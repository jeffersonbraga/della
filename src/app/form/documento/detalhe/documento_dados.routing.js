"use strict";
var router_1 = require('@angular/router');
var documento_dados_component_1 = require('./documento_dados.component');
var documento_dadosDetails_component_1 = require('./documento_dadosDetails.component');
var documento_dadosEdit_component_1 = require('./documento_dadosEdit.component');
var documento_dados_routes = [{ path: '', component: documento_dados_component_1.DocumentoDadosComponent, children: [{ path: 'details', component: documento_dadosDetails_component_1.DocumentoDadosDetailsComponent }, { path: 'edit', component: documento_dadosEdit_component_1.DocumentoDadosEditComponent }] }];
exports.documento_dados_routing = router_1.RouterModule.forChild(documento_dados_routes);
//# sourceMappingURL=documento_dados.routing.js.map