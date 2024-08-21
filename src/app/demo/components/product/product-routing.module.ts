

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [
RouterModule.forChild([
         { path: 'AddProduct', loadChildren: ()  => import('./add-product/addproduct.module').then(m=>m.AddProductModule)},
         { path: 'ViewProduct', loadChildren: ()  => import('./view-product/view-product.module').then(m=>m.ViewProductModule)},
         { path: '**', redirectTo: '/notfound' }
    ])],
    exports: [RouterModule]
})
export class ProductRoutingModule { }
