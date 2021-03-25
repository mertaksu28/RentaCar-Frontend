import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Color } from '../modules/color';
import { ListResponseModule } from '../modules/listResponseModule';

@Injectable({
  providedIn: 'root',
})
export class ColorService {
  apiUrl = 'https://localhost:44392/api/colors/getall';

  constructor(private httpClient: HttpClient) {}

  getColors(): Observable<ListResponseModule<Color>> {
    this.httpClient;
    return this.httpClient.get<ListResponseModule<Color>>(this.apiUrl);
  }
}
