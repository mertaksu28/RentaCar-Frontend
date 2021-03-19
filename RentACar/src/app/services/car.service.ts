import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http';
import { CarResponseModule } from '../modules/carResponseModule';
@Injectable({
  providedIn: 'root'
})
export class CarService {
  apiUrl="https://localhost:44392/api/cars/getcardetail";

  constructor(private httpClient:HttpClient) { }

  getCars():Observable<CarResponseModule>{
    this.httpClient;
    return this.httpClient.get<CarResponseModule>(this.apiUrl);
  }
}
