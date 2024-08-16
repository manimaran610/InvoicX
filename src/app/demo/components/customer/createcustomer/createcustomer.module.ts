import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateCustomerRoutingModule } from './createcustomer-routing.module';
import { CreatecustomerComponent } from './createcustomer.component';
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
import { numberonlyDirective } from 'src/app/demo/Directives/numberonly.directive';
import { DecimalTwoPlacesDirective } from 'src/app/demo/Directives/DecimalTwoPlacesDirective.directive';
import { InputGroup, InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddon, InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { StatesCities } from '../shared/constants/states-cities';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        DropdownModule,
        CreateCustomerRoutingModule,
        AutoCompleteModule,
		CalendarModule,
		ChipsModule,
		DropdownModule,
		InputGroupModule,
		InputGroupAddonModule,
		InputMaskModule,
		InputNumberModule,
		CascadeSelectModule,
		MultiSelectModule,
		InputTextareaModule,
		InputTextModule,
		ReactiveFormsModule
    ],
    declarations: [CreatecustomerComponent,numberonlyDirective,DecimalTwoPlacesDirective],
	providers:[StatesCities]
})
export class CreateCustomerModule { }
