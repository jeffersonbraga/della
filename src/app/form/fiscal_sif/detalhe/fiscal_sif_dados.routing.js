"use strict";
var router_1 = require('@angular/router');
var fiscal_sif_dados_component_1 = require('./fiscal_sif_dados.component');
var fiscal_sif_dadosDetails_component_1 = require('./fiscal_sif_dadosDetails.component');
var fiscal_sif_dadosEdit_component_1 = require('./fiscal_sif_dadosEdit.component');
var fiscal_sif_dados_routes = [{ path: '', component: fiscal_sif_dados_component_1.Fiscal_sifDadosComponent, children: [{ path: 'details', component: fiscal_sif_dadosDetails_component_1.Fiscal_sifDadosDetailsComponent }, { path: 'edit', component: fiscal_sif_dadosEdit_component_1.Fiscal_sifDadosEditComponent }] }];
exports.fiscal_sif_dados_routing = router_1.RouterModule.forChild(fiscal_sif_dados_routes);
//# sourceMappingURL=fiscal_sif_dados.routing.js.map