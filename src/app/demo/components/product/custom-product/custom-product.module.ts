import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomProductRoutingModule } from './custom-product-routing.module';
import { CardModule } from 'primeng/card';
import { CustomProductComponent } from './custom-product.component';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { RatingModule } from 'primeng/rating';
import { ButtonModule } from 'primeng/button';


@NgModule({
  imports: [
    CommonModule,
    CardModule,
    InputNumberModule,
		InputTextareaModule,
		InputTextModule,
    RatingModule,
    ButtonModule,
    CustomProductRoutingModule
  ],
  declarations: [CustomProductComponent],
})
export class CustomProductModule { }
