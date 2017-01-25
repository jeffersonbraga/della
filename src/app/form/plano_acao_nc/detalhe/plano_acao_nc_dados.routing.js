"use strict";
var router_1 = require('@angular/router');
var plano_acao_nc_dados_component_1 = require('./plano_acao_nc_dados.component');
var plano_acao_nc_dadosDetails_component_1 = require('./plano_acao_nc_dadosDetails.component');
var plano_acao_nc_dadosEdit_component_1 = require('./plano_acao_nc_dadosEdit.component');
var plano_acao_nc_dados_routes = [{ path: '', component: plano_acao_nc_dados_component_1.Plano_acao_ncDadosComponent, children: [{ path: 'details', component: plano_acao_nc_dadosDetails_component_1.Plano_acao_ncDadosDetailsComponent }, { path: 'edit', component: plano_acao_nc_dadosEdit_component_1.Plano_acao_ncDadosEditComponent }] }];
exports.plano_acao_nc_dados_routing = router_1.RouterModule.forChild(plano_acao_nc_dados_routes);
//# sourceMappingURL=plano_acao_nc_dados.routing.js.map