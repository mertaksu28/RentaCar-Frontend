import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Color } from '../modules/color';
import { ListResponseModule } from '../modules/listResponseModule';
import { ObjectResponseModule } from '../modules/objectResponseModule';
import { ResponseModule } from '../modules/responseModule';

@Injectable({
  providedIn: 'root',
})
export class ColorService {
  apiUrl = 'https://localhost:44367/api/colors/';

  constructor(private httpClient: HttpClient) {}

  // getColors(): Observable<ListResponseModule<Color>> {
  //   this.httpClient;
  //   return this.httpClient.get<ListResponseModule<Color>>(this.apiUrl);
  // }
  getColors(): Observable<ListResponseModule<Color>> {
    let newPath = this.apiUrl + 'getall';
    return this.httpClient.get<ListResponseModule<Color>>(newPath);
  }
  add(color: Color): Observable<ResponseModule> {
    let newPath = this.apiUrl + 'add';
    return this.httpClient.post<ResponseModule>(newPath, color);
  }
  update(color: Color): Observable<ResponseModule> {
    let newPath = this.apiUrl + 'update';
    return this.httpClient.post<ResponseModule>(newPath, color);
  }

  getColorById(colorId: number): Observable<ObjectResponseModule<Color>> {
    let newPath = this.apiUrl + 'getbyid?id=' + colorId;
    return this.httpClient.get<ObjectResponseModule<Color>>(newPath);
  }
}
