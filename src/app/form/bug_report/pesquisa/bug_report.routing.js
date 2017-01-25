"use strict";
var router_1 = require('@angular/router');
var bug_report_component_1 = require('./bug_report.component');
var bug_report_routes = [{ path: 'bug_report*', pathMatch: 'full', redirectTo: '/bug_report' }, { path: 'bug_report', component: bug_report_component_1.Bug_reportComponent }];
exports.bug_report_routing = router_1.RouterModule.forChild(bug_report_routes);
//# sourceMappingURL=bug_report.routing.js.map