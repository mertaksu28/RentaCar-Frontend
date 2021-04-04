import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Brand } from '../modules/brand';
import { ListResponseModule } from '../modules/listResponseModule';

@Injectable({
  providedIn: 'root',
})
export class BrandService {
  apiUrl = 'https://localhost:44367/api/brands/getall';

  constructor(private httpClient: HttpClient) {}

  //Observable:

  getBrands(): Observable<ListResponseModule<Brand>> {
    this.httpClient;
    return this.httpClient.get<ListResponseModule<Brand>>(this.apiUrl);
  }
}
