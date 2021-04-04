import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModule } from '../modules/listResponseModule';
import { Rental } from '../modules/rental';
import { ResponseModule } from '../modules/responseModule';

@Injectable({
  providedIn: 'root',
})
export class RentalService {
  apiUrl = 'https://localhost:44367/api/rentals/';
  constructor(private httpClient: HttpClient) { }

  getRentals(): Observable<ListResponseModule<Rental>> {
    this.httpClient;
    let newPath = this.apiUrl + "getrentaldetail"
    return this.httpClient.get<ListResponseModule<Rental>>(newPath);
  }


  checkCar(carId: number): Observable<ListResponseModule<Rental>> {
    let newPath = this.apiUrl + "checkcar?carId=" + carId
    return this.httpClient.get<ListResponseModule<Rental>>(newPath)

  };
  add(rental: Rental): Observable<ResponseModule> {
    let newPath = this.apiUrl + "add"
    return this.httpClient.post<ResponseModule>(newPath, rental)
  }



}
