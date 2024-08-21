import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ViewProductComponent } from './view-product.component';

@NgModule({
    imports: [RouterModule.forChild([
        { path: '', component: ViewProductComponent }
    ])],
    exports: [RouterModule]
})
export class ViewProductRoutingModule { }
