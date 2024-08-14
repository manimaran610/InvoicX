import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [RouterModule.forChild([
         { path: 'AddCustomer', loadChildren: ()  => import('./createcustomer/createcustomer.module').then(m=>m.CreateCustomerModule)},
         { path: 'ViewCustomer', loadChildren: ()  => import('./view-customer/view-customer.module').then(m=>m.ViewCustomerModule)},
         { path: '**', redirectTo: '/notfound' }
    ])],
    exports: [RouterModule]
})
export class CrudcomponentRoutingModule { }
