import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Customer, Customers, Representative } from 'src/app/demo/api/customer';
import { CustomerService } from 'src/app/demo/service/customer.service';
import { Product } from 'src/app/demo/api/product';
import { ProductService } from 'src/app/demo/service/product.service';
import { Table } from 'primeng/table';
import { Router, RouterLink } from '@angular/router';
import { DbserverserviceService } from 'src/app/demo/service/DbserverserviceService';
import { HttpClient } from '@angular/common/http';
import { GridColumnOptions } from '../../shared/Models/grid-column-options';


interface expandedRows {
    [key: string]: boolean;
}

@Component({
    templateUrl: './view-customer.component.html',
})
export class ViewCustomerComponent implements OnInit {


    customers1: Customers[] = [];

    selectedCustomers1: Customer[] = [];

    selectedCustomer: Customer = {};

    representatives: Representative[] = [];

    statuses: any[] = [];

    products: Product[] = [];

    rowGroupMetadata: any;

    expandedRows: expandedRows = {};

    activityValues: number[] = [0, 100];

    isExpanded: boolean = false;

    idFrozen: boolean = false;

    loading: boolean = true;

    @ViewChild('filter') filter!: ElementRef;

    constructor(private customerService: CustomerService, private productService: ProductService, private dbservice: DbserverserviceService,private http:HttpClient, private route:Router) { }

    ngOnInit() {
        // this.customerService.getCustomersLarge().then(customers => {
        //     this.customers1 = customers;
        //     this.loading = false;

        //     // @ts-ignore
        //     this.customers1.forEach(customer => customer.date = new Date(customer.date));
        // });
        this.fetchProducts();
        this.productService.getProductsWithOrdersSmall().then(data => this.products = data);

        
    }
    async fetchProducts() {
        this.customers1 = await this.dbservice.GetCustomer();
        console.log(this.customers1);
        this.loading = false;
      }

      options: GridColumnOptions[] = [
        { field: 'name', header: 'Customer Name', isSortable: true, hasFilter: true, hasTableValue: true },
        { field: 'ownerName', header: 'Owner Name', isSortable: true, hasFilter: true, hasTableValue: true },
        { field: 'city', header: 'City', isSortable: true, hasFilter: true, hasTableValue: true },
        { field: 'openBalanace', header: 'Balance', isSortable: true, hasFilter: true, hasTableValue: true },
        { field: '', header: 'User Action',hasTableValue: false } // for action buttons
    
      ]

    


    onGlobalFilter(table: Table, event: Event) {
        table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
    }

    clear(table: Table) {
        table.clear();
        this.filter.nativeElement.value = '';
    }

    addCustomer() {}

    navigateUrl(id:number){
        console.log(id);
        this.route.navigateByUrl(`/customer/AddCustomer/${id}`)
    }

    onPreviewEvent($event: any) {
        this.navigateUrl($event.id)
        }

}