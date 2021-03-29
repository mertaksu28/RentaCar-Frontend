import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Car } from '../modules/car';
import { ListResponseModule } from '../modules/listResponseModule';
import { Brand } from '../modules/brand';
@Injectable({
  providedIn: 'root',
})
export class CarService {
  apiUrl = 'https://localhost:44392/api/';

  constructor(private httpClient: HttpClient) {}

  getCars(): Observable<ListResponseModule<Car>> {
    let newPath = this.apiUrl + 'cars/getcardetail';
    return this.httpClient.get<ListResponseModule<Car>>(newPath);
  }

  getCarsByBrand(brandId: number): Observable<ListResponseModule<Car>> {
    let newPath = this.apiUrl + 'cars/getcardetailbybrandid?id=' + brandId;
    return this.httpClient.get<ListResponseModule<Car>>(newPath);
  }
  getCarsByColor(colorId: number): Observable<ListResponseModule<Car>> {
    let newPath = this.apiUrl + 'cars/getcardetailbycolorid?id=' + colorId;
    return this.httpClient.get<ListResponseModule<Car>>(newPath);
  }

  getCarsFilter(
    brandId: number,
    colorId: number
  ): Observable<ListResponseModule<Car>> {
    let newPath =
      this.apiUrl +
      'cars/getcarsfilter?brandId=' +
      brandId +
      '&&colorId=' +
      colorId;
    return this.httpClient.get<ListResponseModule<Car>>(newPath);
  }

  // getcarsfilter?brandId=1&&colorId=1
}
