import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Customer } from "../models/customer";
import { BaseResponse } from "../models/shared/base-response";
import { RequestParameter } from "../models/shared/request-parameter";
import { BaseHttpClientServiceService } from "./shared/base-http-client-service.service";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private httpService: BaseHttpClientServiceService) {
  }

  mapURLpath() {
    this.httpService.mapURLPath('Customer')
  }

  getCustomerById(id: string): Observable<BaseResponse<Customer>> {
    this.mapURLpath();

    return this.httpService.getById<Customer>(id);
  }

  getAllPagedResponse(reqParams?: RequestParameter,groupId?:string): Observable<BaseResponse<Customer[]>> {
    this.mapURLpath();

    reqParams = reqParams !== undefined ? reqParams! : new RequestParameter();
    if (groupId !== undefined || groupId !== '' || groupId !== null) reqParams.optionalParams.push({ param: 'GroupId', value: groupId! })
    return this.httpService.getAll<Customer[]>(reqParams);
  }


  postCustomer(data: Customer): Observable<BaseResponse<number>> {
    this.mapURLpath();
    return this.httpService.post<Customer, number>(data)
  }

  updateCustomer(id: string, data: Customer): Observable<BaseResponse<number>> {
    this.mapURLpath();

    return this.httpService.put<Customer, number>(id, data)
  }
  
  deleteCustomerById(id: string): Observable<BaseResponse<number>> {
    this.mapURLpath();

    return this.httpService.deleteById<number>(id);
  }

 

  
}
