import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginModule } from '../modules/loginModule';
import { SingleResponseModule } from '../modules/singleResponseModule';
import { TokenModule } from '../modules/tokenModule';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiUrl = 'https://localhost:44367/api/auth'
  constructor(private httpClient: HttpClient) { }

  login(loginModule: LoginModule) {
    return this.httpClient.post<SingleResponseModule<TokenModule>>(this.apiUrl + 'login' , loginModule)
  }
  isAuthenticated() {
    if (localStorage.getItem('token')) {
      return true;
    } else {
      return false; 
    }
  }

}
