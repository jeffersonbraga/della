"use strict";
var router_1 = require('@angular/router');
var modulo_dados_component_1 = require('./modulo_dados.component');
var modulo_dadosDetails_component_1 = require('./modulo_dadosDetails.component');
var modulo_dadosEdit_component_1 = require('./modulo_dadosEdit.component');
var modulo_dados_routes = [{ path: '', component: modulo_dados_component_1.ModuloDadosComponent, children: [{ path: 'details', component: modulo_dadosDetails_component_1.ModuloDadosDetailsComponent }, { path: 'edit', component: modulo_dadosEdit_component_1.ModuloDadosEditComponent }] }];
exports.modulo_dados_routing = router_1.RouterModule.forChild(modulo_dados_routes);
//# sourceMappingURL=modulo_dados.routing.js.map