import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Product } from 'src/app/demo/api/product';
import { ProductService } from 'src/app/demo/service/product.service';
import { Router } from '@angular/router';
import { DbserverserviceService } from 'src/app/demo/service/DbserverserviceService';
import { HttpClient } from '@angular/common/http';
import { GridColumnOptions } from '../../shared/Models/grid-column-options';


@Component({
    templateUrl: './view-product.component.html',
})
export class ViewProductComponent implements OnInit {


    products: Product[] = [];

    loading: boolean = true;

    @ViewChild('filter') filter!: ElementRef;

    options: GridColumnOptions[] = [
        { field: 'code', header: 'Product Code', isSortable: true, hasFilter: true, hasTableValue: true },
        { field: 'name', header: 'Name', isSortable: true, hasFilter: true, hasTableValue: true, dataClass: 'text-primary font-semibold' },
        { field: 'category', header: 'Category', isSortable: true, hasFilter: true, hasTableValue: true },
        { field: 'price', header: 'Price', isSortable: true, hasFilter: true, hasTableValue: true },
        { field: 'quantity', header: 'Quantity', isSortable: true, hasFilter: true, hasTableValue: true },
        { field: '', header: 'User Action', hasTableValue: false } // for action buttons

    ]

    constructor(private productService: ProductService,
                private dbservice: DbserverserviceService,
                private http: HttpClient,
                private route: Router) { }

    ngOnInit() {
        this.fetchCustomers();
        this.productService.getProductsWithOrdersSmall().then(data => this.products = data);


    }
    async fetchCustomers() {
        // this.customers1 = await this.dbservice.GetCustomer();
        // console.log(this.customers1);
        // this.loading = false;
    }

  



    addCustomer() { }

    navigateUrl(id: number) {
        console.log(id);
        this.route.navigateByUrl(`/product/AddProduct/${id}`)
    }

    onPreviewEvent($event: any) {
        this.navigateUrl($event.id)
    }

}