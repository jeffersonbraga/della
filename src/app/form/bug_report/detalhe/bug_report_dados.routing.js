"use strict";
var router_1 = require('@angular/router');
var bug_report_dados_component_1 = require('./bug_report_dados.component');
var bug_report_dadosDetails_component_1 = require('./bug_report_dadosDetails.component');
var bug_report_dadosEdit_component_1 = require('./bug_report_dadosEdit.component');
var bug_report_dados_routes = [{ path: '', component: bug_report_dados_component_1.Bug_reportDadosComponent, children: [{ path: 'details', component: bug_report_dadosDetails_component_1.Bug_reportDadosDetailsComponent }, { path: 'edit', component: bug_report_dadosEdit_component_1.Bug_reportDadosEditComponent }] }];
exports.bug_report_dados_routing = router_1.RouterModule.forChild(bug_report_dados_routes);
//# sourceMappingURL=bug_report_dados.routing.js.map