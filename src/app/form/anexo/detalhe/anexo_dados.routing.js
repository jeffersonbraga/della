"use strict";
var router_1 = require('@angular/router');
var anexo_dados_component_1 = require('./anexo_dados.component');
var anexo_dadosDetails_component_1 = require('./anexo_dadosDetails.component');
var anexo_dadosEdit_component_1 = require('./anexo_dadosEdit.component');
var anexo_dados_routes = [{ path: '', component: anexo_dados_component_1.AnexoDadosComponent, children: [{ path: 'details', component: anexo_dadosDetails_component_1.AnexoDadosDetailsComponent }, { path: 'edit', component: anexo_dadosEdit_component_1.AnexoDadosEditComponent }] }];
exports.anexo_dados_routing = router_1.RouterModule.forChild(anexo_dados_routes);
//# sourceMappingURL=anexo_dados.routing.js.map