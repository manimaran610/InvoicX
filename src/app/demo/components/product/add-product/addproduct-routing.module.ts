import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AddProductComponent } from './addproduct.component';

@NgModule({
    imports: [RouterModule.forChild([
        { path: '', component: AddProductComponent },
        { path: ':id', component: AddProductComponent }
    ])],
    exports: [RouterModule]
})
export class AddProductRoutingModule { }
