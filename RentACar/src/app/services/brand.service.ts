import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Brand } from '../modules/brand';
import { ListResponseModule } from '../modules/listResponseModule';
import { ObjectResponseModule } from '../modules/objectResponseModule';
import { ResponseModule } from '../modules/responseModule';

@Injectable({
  providedIn: 'root',
})
export class BrandService {
  apiUrl = 'https://localhost:44367/api/brands/';

  constructor(private httpClient: HttpClient) {}

  //Observable:

  // getBrands(): Observable<ListResponseModule<Brand>> {
  //   this.httpClient;
  //   return this.httpClient.get<ListResponseModule<Brand>>(this.apiUrl);
  // }
  getBrands(): Observable<ListResponseModule<Brand>> {
    let newPath = this.apiUrl + 'getall';
    return this.httpClient.get<ListResponseModule<Brand>>(newPath);
  }
  add(brand: Brand): Observable<ResponseModule> {
    let newPath = this.apiUrl + 'add';
    return this.httpClient.post<ResponseModule>(newPath, brand);
  }
  update(brand: Brand): Observable<ResponseModule> {
    let newPath = this.apiUrl + 'update';
    return this.httpClient.post<ResponseModule>(newPath, brand);
  }

  getBrandById(brandId: number): Observable<ObjectResponseModule<Brand>> {
    let newPath = this.apiUrl + 'getbyid?id=' + brandId;
    return this.httpClient.get<ObjectResponseModule<Brand>>(newPath);
  }
}
