import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CustomerResponseModule } from '../modules/customerResponseModule';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  apiUrl = 'https://localhost:44392/api/customers/getcustomerdetail';
  constructor(private httpClient: HttpClient) {}

  getCustomers(): Observable<CustomerResponseModule> {
    this.httpClient;
    return this.httpClient.get<CustomerResponseModule>(this.apiUrl);
  }
}
