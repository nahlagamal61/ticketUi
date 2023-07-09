import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import {environment} from 'src/Environment/environment'
import { Login } from '../Models/Login';
import { Registeration } from '../Models/Registeration';
import { AuthenticationData } from '../Models/authenticationData';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private httpClient : HttpClient) { }

  // authenticateDate : AuthenticationData |null =null;

  // public saveAthenticationDate(token : string, role : string) {
  //   this.authenticateDate = new AuthenticationData(token , role);
  // }
  // public logout(){
  //   this.authenticateDate = null;
  // }
  // isUserLogged(){
  //   return this.authenticateDate != null && this.authenticateDate.token != '';
  // }

  login(login :Login):Observable<any>{
    return this.httpClient
      .post<any>(`${environment.apiUrl}Authenticate/login`, login );
  } 

}
