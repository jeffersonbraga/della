"use strict";
var router_1 = require('@angular/router');
var causa_efeito_dados_component_1 = require('./causa_efeito_dados.component');
var causa_efeito_dadosDetails_component_1 = require('./causa_efeito_dadosDetails.component');
var causa_efeito_dadosEdit_component_1 = require('./causa_efeito_dadosEdit.component');
var causa_efeito_dados_routes = [{ path: '', component: causa_efeito_dados_component_1.Causa_efeitoDadosComponent, children: [{ path: 'details', component: causa_efeito_dadosDetails_component_1.Causa_efeitoDadosDetailsComponent }, { path: 'edit', component: causa_efeito_dadosEdit_component_1.Causa_efeitoDadosEditComponent }] }];
exports.causa_efeito_dados_routing = router_1.RouterModule.forChild(causa_efeito_dados_routes);
//# sourceMappingURL=causa_efeito_dados.routing.js.map