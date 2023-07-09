import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError, Observable } from 'rxjs';
import { environment } from 'src/Environment/environment';
import { Registeration } from '../Models/Registeration';

@Injectable({
  providedIn: 'root'
})
export class RegisterationService {
  constructor(private httpClient : HttpClient) { }

  
  register(registeration :Registeration):Observable<any>{
    return this.httpClient
      .post<any>(`${environment.apiUrl}Authenticate/register`, registeration );
  } 
}
