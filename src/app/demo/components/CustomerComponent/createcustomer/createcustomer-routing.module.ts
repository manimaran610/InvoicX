import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CreatecustomerComponent } from './createcustomer.component';

@NgModule({
    imports: [RouterModule.forChild([
        { path: '', component: CreatecustomerComponent },
        { path: ':id', component: CreatecustomerComponent }
    ])],
    exports: [RouterModule]
})
export class CreateCustomerRoutingModule { }
