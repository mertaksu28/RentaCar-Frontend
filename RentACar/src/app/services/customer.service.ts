import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../modules/customer';
import { ListResponseModule } from '../modules/listResponseModule';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  apiUrl = 'https://localhost:44392/api/customers/getcustomerdetail';
  constructor(private httpClient: HttpClient) {}

  getCustomers(): Observable<ListResponseModule<Customer>> {
    this.httpClient;
    return this.httpClient.get<ListResponseModule<Customer>>(this.apiUrl);
  }
}
