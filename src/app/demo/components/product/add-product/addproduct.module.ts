import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { AddProductComponent } from './addproduct.component';
import { AddProductRoutingModule } from './addproduct-routing.module';
import { FileUploadModule } from 'primeng/fileupload';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextareaModule } from 'primeng/inputtextarea';

@NgModule({
    imports: [
		DropdownModule,
		InputNumberModule,
		InputTextareaModule,
		InputTextModule,
		ReactiveFormsModule,
        CommonModule,
		FormsModule,
        AddProductRoutingModule,
		FileUploadModule
	    ],
    declarations: [AddProductComponent],
	providers:[]
})


export class AddProductModule { }
