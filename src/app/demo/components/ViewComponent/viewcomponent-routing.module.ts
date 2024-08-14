import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [RouterModule.forChild([
        { path: 'ViewDashboard', loadChildren: () => import('./view-dashboard/view-dashboard.module').then(m=>m.ViewDashboardModule)},
        { path: '**', redirectTo: '/notfound' }
    ])],
    exports: [RouterModule]
})
export class ViewcomponentRoutingModule { }
