import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserServiceTsService {

  constructor(private httpClient : HttpClient) { }

  public login(loginData: any){
    return this.httpClient.post(`${environment.apiUrl}auth/login`,loginData);
  }
}


