import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomProductComponent } from './custom-product.component';

const routes: Routes = [
  { path: '', component: CustomProductComponent },
  { path: ':id', component: CustomProductComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomProductRoutingModule { }
