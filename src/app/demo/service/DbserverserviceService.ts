import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Product } from "../api/product";
import { Customer, CityStates, States, Country } from "../api/models/customer";

@Injectable({
  providedIn: 'root'
})
export class DbserverserviceService {
  constructor(private http: HttpClient) { }

  GetCustomer(): Promise<Customer[]> {
    const WORKSPACE_URL = "https://3000-idx-invoicx-1722047333548.cluster-fu5knmr55rd44vy7k7pxk74ams.cloudworkstations.dev/Customer";

    async function get(url): Promise<Customer[]> {
      const response = await fetch(url, {
        credentials: 'include',
      });
      const data = await response.json(); // Parse response as JSON
      console.log(data);
      return data as Customer[];
    }
    // Call the backend
    return get(WORKSPACE_URL);
  }

  GetCustomerById(customerId:number): Promise<Customer> {
    const WORKSPACE_URL = "https://3000-idx-invoicx-1722047333548.cluster-fu5knmr55rd44vy7k7pxk74ams.cloudworkstations.dev/Customer";

    async function get(url): Promise<Customer> {
      const response = await fetch(url, {
        credentials: 'include',
      });
      const data = await response.json(); // Parse response as JSON
      var result = data.find(x=>x.id==customerId)
      console.log(result);
      return result as Customer;
    }
    // Call the backend
    return get(WORKSPACE_URL);
  }

   
  GetProductById(id:number): Promise<Product> {
    const WORKSPACE_URL = "https://3000-idx-invoicx-1722047333548.cluster-fu5knmr55rd44vy7k7pxk74ams.cloudworkstations.dev/products";

    async function get(url): Promise<Product> {
      const response = await fetch(url, {
        credentials: 'include',
      });
      const data = await response.json(); // Parse response as JSON
      var result = data.find(x=>x.id==id)
      console.log(result);
      return result as Product;
    }
    // Call the backend
    return get(WORKSPACE_URL);
  }

  GetCityStates(): Promise<CityStates[]> {
    const WORKSPACE_URL = "https://3000-idx-manimarketsoftwarae-1722502139104.cluster-fu5knmr55rd44vy7k7pxk74ams.cloudworkstations.dev/CityState";

    async function get(url): Promise<any> {
      const response = await fetch(url, {
        credentials: 'include',
      });
      const data = await response.json(); // Parse response as JSON
      console.log(data);
      return data as CityStates[];
    }
    // Call the backend
    return get(WORKSPACE_URL);
  }
  GetStates(): Promise<States[]> {
    const WORKSPACE_URL = "https://3000-idx-manimarketsoftwarae-1722502139104.cluster-fu5knmr55rd44vy7k7pxk74ams.cloudworkstations.dev/States";

    async function get(url): Promise<any> {
      const response = await fetch(url, {
        credentials: 'include',
      });
      const data = await response.json(); // Parse response as JSON
      console.log(data);
      return data as States[];
    }
    // Call the backend
    return get(WORKSPACE_URL);
  }

  GetCountries(): Promise<Country[]> {
    const WORKSPACE_URL = "https://3000-idx-manimarketsoftwarae-1722502139104.cluster-fu5knmr55rd44vy7k7pxk74ams.cloudworkstations.dev/Country";

    async function get(url): Promise<any> {
      const response = await fetch(url, {
        credentials: 'include',
      });
      const data = await response.json(); // Parse response as JSON
      console.log(data);
      return data as Country[];
    }
    // Call the backend
    return get(WORKSPACE_URL);
  }
  PostCustomer(customer: Customer): Promise<Customer> {
    const WORKSPACE_URL = "https://3000-idx-manimarketsoftwarae-1722502139104.cluster-fu5knmr55rd44vy7k7pxk74ams.cloudworkstations.dev/Customer";
  
    async function post(url, data): Promise<Customer> {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*' ,
          'Access-Control-Allow-Credentials':'true'
        },
        mode:'cors',
        body: JSON.stringify(data),
        credentials: 'include',
      });
      const result = await response.json();
      console.log(result);
      return result as Customer;
    }
  
    return post(WORKSPACE_URL, customer);
  }
  
  
}