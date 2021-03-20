import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ColorResponseModule } from '../modules/colorResponseModule';

@Injectable({
  providedIn: 'root',
})
export class ColorService {
  apiUrl = 'https://localhost:44392/api/colors/getall';

  constructor(private httpClient: HttpClient) {}

  getColors(): Observable<ColorResponseModule> {
    this.httpClient;
    return this.httpClient.get<ColorResponseModule>(this.apiUrl);
  }
}
