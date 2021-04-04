import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../modules/car';
import { ObjectResponseModule } from '../modules/objectResponseModule';

@Injectable({
  providedIn: 'root',
})
export class CarDetailDtoService {
  apiUrl = 'https://localhost:44367/api/';

  constructor(private httpClient: HttpClient) {}

  getCarsDetailByCarId(carId:number):Observable<ObjectResponseModule<Car>>{
    let newPath = this.apiUrl + 'cars/getdetailbycarid?id=' + carId;
    return this.httpClient.get<ObjectResponseModule<Car>>(newPath);
  }


}
