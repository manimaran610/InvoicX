import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Customers } from 'src/app/demo/api/customer';
import { DbserverserviceService } from 'src/app/demo/service/DbserverserviceService';
import { StatesCities } from '../shared/constants/states-cities';


@Component({
  templateUrl: './createcustomer.component.html',
})
export class CreatecustomerComponent implements OnInit {

  constructor( 
        private dbservice: DbserverserviceService, 
        private route: Router, 
        private activeRoute: ActivatedRoute,
        private statesCities :StatesCities
    ) 
        {
    this.CustomerForm = new FormGroup({
      name: new FormControl('', Validators.required),
      ownername: new FormControl('', Validators.required),
      street1: new FormControl('', Validators.required),
      street2: new FormControl('',Validators.required),
      city: new FormControl('', Validators.required),
      state: new FormControl('', Validators.required),
      phone: new FormControl('', [Validators.required,Validators.maxLength(10),Validators.minLength(10)]),
      cell: new FormControl('',[Validators.required,Validators.maxLength(10),Validators.minLength(10)]),
      tin: new FormControl('',Validators.required),
      GST: new FormControl('', [Validators.pattern('^([0][1-9]|[1-2][0-9]|[3][0-7])([a-zA-Z]{5}[0-9]{4}[a-zA-Z]{1}[1-9a-zA-Z]{1}[zZ]{1}[0-9a-zA-Z]{1})+$')]),
      OpenBalanace: new FormControl('',[Validators.required,Validators.maxLength(10)]),
      pincode : new FormControl('',[Validators.minLength(6)])
    });
   }

  public CustomerForm: FormGroup

  public CustomerId: number

  public customer: Customers

  filteredStates: any[] =[]

  filteredCities: any[] =[]

  public enableCity =false

  states: any[] = this.statesCities.states;

  cities: any[] = this.statesCities.cities;



  ngOnInit(): void {
    this.activeRoute.params.subscribe(params=>{
      if (params['id'] !== undefined && params['id'] > 0) {
        this.CustomerId = params['id'];
        console.warn("Id",this.CustomerId);
        if (this.CustomerId > 0) {
          this.getCustomerIdById(this.CustomerId);
        }
      }
    })
  }
  public async getCustomerIdById(customerId:number){
    this.customer = await this.dbservice.GetCustomerById(customerId);
    console.log(this.customer);
    this.PatchCustomerValuetoForm(this.customer);

  }
  public PatchCustomerValuetoForm(customer:Customers){
    this.CustomerForm.patchValue(customer);
    console.log(this.CustomerForm);
  }
  selectedState: any = null;

  dropdownItems = [
    { name: 'Chennai', code: 'Option 1' },
    { name: 'Madurai', code: 'Option 2' },
    { name: 'Dindigul', code: 'Option 3' }
  ];


  public Submit() {
    if (this.CustomerForm.valid) {
      this.customer = this.CustomerForm.value
      console.log(this.CustomerForm.value)
      console.log(this.customer)
      this.dbservice.PostCustomer(this.customer);
    }
    else{
      this.CustomerForm.markAllAsTouched();
      console.log(this.CustomerForm)
    }
  }
  searchStates(event: any) {
    const filtered: any[] = [];
    const query = event.query;
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < this.states.length; i++) {
        const state = this.states[i];
        if (state.name.toLowerCase().indexOf(query.toLowerCase()) == 0) {
            filtered.push(state);
        }
    }

    this.filteredStates = filtered;
    this.enableCity=false
}
setCities(event:any){
  this.enableCity = true;
  console.log(this.CustomerForm.get('state').value)
  if(this.CustomerForm.get('state').value){
    const filtered: any[] = [];
    for (let i = 0; i < this.filteredStates.length; i++) {
      filtered.push(this.cities.filter(x=>x.state==this.filteredStates[i].name))
    }
    this.filteredCities=filtered[0]
    console.log(this.filteredCities)
  }
}
}
