

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/demo/api/product';
import { DbserverserviceService } from 'src/app/demo/service/DbserverserviceService';


@Component({
  templateUrl: './addproduct.component.html',
})
export class AddProductComponent implements OnInit {



  constructor(
    private dbservice: DbserverserviceService,
    private route: Router,
    private activeRoute: ActivatedRoute
  ) {
    this.productForm = new FormGroup({
      name: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      code: new FormControl('', Validators.required),
      category: new FormControl({value:1,disabled:!this.categoryEnabled}, Validators.required),
      price: new FormControl('', [Validators.required,Validators.min(1)]),
      stockType: new FormControl(1, Validators.required),
      quantity:  new FormControl('', [Validators.required,Validators.min(1)]),
      image: new FormControl(''),

    });
  }

  public productForm: FormGroup

  public productId: number

  public product: Product

  public categoryEnabled: boolean = true;

  public isDynamicStock: boolean = false;




  ngOnInit(): void {
    this.activeRoute.params.subscribe(params => {
      if (params['id'] !== undefined && params['id'] > 0) {
        this.productId = params['id'];
        console.warn("Id", this.productId);
        if (this.productId > 0) {
          this.getProductById(this.productId);
        }
      }
    })


  }

  uploadedFiles: any[] = [];


  onUpload(event:any) {
      for(let file of event.files) {
        console.warn(file);
          this.uploadedFiles.push(file);
          this.productForm.get('image').patchValue(file.name)
      }
    }

    onRemove(event:any) {
      for(let file of event.files) {
        console.warn(file);
          this.uploadedFiles.filter(e=> e.name !== file.name);
          this.productForm.get('image').patchValue('')
      }
    }

  public async getProductById(productId: number) {
    // this.product = await this.dbservice.GetProductById(productId); // Assuming you have a GetProductById
    console.log(this.product);
    this.PatchProductValuetoForm(this.product);

  }
  public PatchProductValuetoForm(product: Product) {
    this.productForm.patchValue(product);
    console.log(this.productForm);
  }

  categoriesList = [
    { id: 1, name: 'Vegetables',imgsrc:'https://iili.io/dGGW9Qj.png' },
    { id: 2, name: 'Fruits' },
    { id: 3, name: 'Grains' },
    { id: 4, name: 'Dairy' },
    { id: 5, name: 'Meat' },
    { id: 6, name: 'Beverages' },
    { id: 7, name: 'Snacks' },
    { id: 8, name: 'Cleaning' },
    { id: 9, name: 'Other' },
  ];

  stockTypes = [
    { id: 1, name: 'Static' },
    { id: 2, name: 'Dynamic' }
  ]


  public Submit() {
    if (this.productForm.valid) {
      this.product = this.productForm.value;
      console.warn(this.productForm.value);
      console.warn(this.product);
      // this.dbservice.PostProduct(this.product); // Assuming you have a PostProduct method
    }
    else {
      this.productForm.markAllAsTouched();
      console.warn(this.productForm.value);
    }
  }


  onStockTypeChange() {
    const value = this.productForm.get('stockType').value;
    console.warn(value);

    if (value == 2) {
      this.isDynamicStock = true;
    }
    else {
      this.isDynamicStock = false;
    }
  }



}
