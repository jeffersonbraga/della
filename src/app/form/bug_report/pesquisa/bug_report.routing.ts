import { Routes, RouterModule } from '@angular/router';  import { Bug_reportComponent } from './bug_report.component';  const bug_report_routes: Routes = [   { path: 'bug_report*', pathMatch:'full', redirectTo: '/bug_report' },   { path: 'bug_report', component: Bug_reportComponent} ];  export const bug_report_routing = RouterModule.forChild(bug_report_routes);