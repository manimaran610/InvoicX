import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { CalendarModule } from 'primeng/calendar';
import { ChipsModule } from 'primeng/chips';
import { InputMaskModule } from 'primeng/inputmask';
import { InputNumberModule } from 'primeng/inputnumber';
import { CascadeSelectModule } from 'primeng/cascadeselect';
import { MultiSelectModule } from 'primeng/multiselect';
import { InputTextareaModule } from 'primeng/inputtextarea';
import {  InputGroupModule } from 'primeng/inputgroup';
import {  InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { AddProductComponent } from './addproduct.component';
import { AddProductRoutingModule } from './addproduct-routing.module';
import { FileUploadModule } from 'primeng/fileupload';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        DropdownModule,
        AddProductRoutingModule,
        AutoCompleteModule,
		CalendarModule,
		ChipsModule,
		DropdownModule,
		InputGroupModule,
		InputGroupAddonModule,
		InputMaskModule,
		InputNumberModule,
		InputTextareaModule,
		InputTextModule,
		ReactiveFormsModule,
		FileUploadModule
    ],
    declarations: [AddProductComponent],
	providers:[]
})
export class AddProductModule { }
