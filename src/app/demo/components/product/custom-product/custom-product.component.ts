import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/demo/api/product';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DbserverserviceService } from 'src/app/demo/service/DbserverserviceService';
import { Customer } from 'src/app/demo/api/models/customer';

@Component({
  templateUrl: './custom-product.component.html'
})
export class CustomProductComponent implements OnInit  {

  productForm:FormGroup;

  public productId: number 
  
  public product: Product

  customers: Customer[] = [];
  
  public productDialog: boolean = false;

  public isEffTypeLimited :boolean =false;


  constructor(
    private dbservice: DbserverserviceService,
    private route: Router,
    private activeRoute: ActivatedRoute
  ) {

    this.productForm = new FormGroup({
      price: new FormControl('',Validators.min(1)),
      effectiveType: new FormControl(1,Validators.required),
      startDate: new FormControl('',Validators.required),
      endDate: new FormControl('',Validators.required),
      appliesTo:new FormControl([],Validators.required)

    
  });
  }

 

  ngOnInit(): void {
    this.activeRoute.params.subscribe(params => {
      if (params['id'] !== undefined && params['id'] > 0) {
        this.productId = params['id'];
        console.warn("Id", this.productId);
        if (this.productId > 0) {
          this.getProductById();
        }
      }
    })
     this.fetchCustomers();
  }

  async fetchCustomers() {
    this.customers = await this.dbservice.GetCustomer();
  }

    async  getProductById(){
    this.product = await this.dbservice.GetProductById(this.productId);
    console.log(this.product)
  }

  onSetCustomPrice(){
    this.productDialog = true
  }

  hideDialog() {
    this.productDialog = false;
    this.productForm.reset();
  }

  

  onEffectiveTypeChange() {
    const value = this.productForm.get('effectiveType').value;
    console.warn(value);

    if (value == 2) {
      this.isEffTypeLimited = true;
    }
    else {
      this.isEffTypeLimited = false;
    }
  }

  effectiveTypes = [
    { id: 1, name: 'No Limit' },
    { id: 2, name: 'Limited' }
  ]


}
