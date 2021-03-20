import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BrandResponseModule } from '../modules/brandResponseModule';

@Injectable({
  providedIn: 'root',
})
export class BrandService {
  apiUrl = 'https://localhost:44392/api/brands/getall';

  constructor(private httpClient: HttpClient) {}

  //Observable:

  getBrands(): Observable<BrandResponseModule> {
    this.httpClient;
    return this.httpClient.get<BrandResponseModule>(this.apiUrl);
  }
}
