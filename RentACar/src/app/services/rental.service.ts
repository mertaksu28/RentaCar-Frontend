import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModule } from '../modules/listResponseModule';
import { Rental } from '../modules/rental';

@Injectable({
  providedIn: 'root',
})
export class RentalService {
  apiUrl = 'https://localhost:44392/api/rentals/getrentaldetail';
  constructor(private httpClient: HttpClient) {}

  getRentals(): Observable<ListResponseModule<Rental>> {
    this.httpClient;
    return this.httpClient.get<ListResponseModule<Rental>>(this.apiUrl);
  }
}
