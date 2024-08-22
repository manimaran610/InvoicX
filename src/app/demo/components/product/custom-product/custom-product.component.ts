import { Component, OnInit } from '@angular/core';
import { getActiveConsumer } from '@angular/core/primitives/signals';
import { Router, ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/demo/api/product';
import { DbserverserviceService } from 'src/app/demo/service/DbserverserviceService';

@Component({
  templateUrl: './custom-product.component.html'
})
export class CustomProductComponent implements OnInit  {

  constructor(
    private dbservice: DbserverserviceService,
    private route: Router,
    private activeRoute: ActivatedRoute
  ) {}

  public productId: number 

  public product: Product

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
  }

    async  getProductById(){
    this.product = await this.dbservice.GetProductById(this.productId);
    console.log(this.product)
  }

}
