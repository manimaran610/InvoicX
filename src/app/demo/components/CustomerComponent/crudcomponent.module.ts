import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrudcomponentRoutingModule } from './crudcomponent-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        CrudcomponentRoutingModule
    ]
})
export class CrudcomponentModule { }
