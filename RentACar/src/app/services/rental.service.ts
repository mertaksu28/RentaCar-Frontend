import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RentalResponseModule } from '../modules/rentalResponseModule';

@Injectable({
  providedIn: 'root',
})
export class RentalService {
  apiUrl = 'https://localhost:44392/api/rentals/getrentaldetail';
  constructor(private httpClient: HttpClient) {}

  getRentals(): Observable<RentalResponseModule> {
    this.httpClient;
    return this.httpClient.get<RentalResponseModule>(this.apiUrl);
  }
}
