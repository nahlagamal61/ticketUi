import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import {environment} from 'src/Environment/environment'
import { ResponceModel } from '../Models/ResponseModel';
import { TicketRequest, TicketResponse, TicketStatus } from '../Models/Ticket';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  constructor(private httpClient : HttpClient) { }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.log("An error occured: ", error.error);
    } else {
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }

    return throwError(() => new Error('Something bad happened, Please try again later'));
  }

  get():Observable<ResponceModel<TicketResponse[]>>{
    return this.httpClient
      .get<ResponceModel<TicketResponse[]>>(`${environment.apiUrl}Ticket?PageIndex=1&PageSize=20`);
  }

  add(ticket :TicketRequest):Observable<ResponceModel<TicketResponse>>{
    return this.httpClient
      .post<ResponceModel<TicketResponse>>(`${environment.apiUrl}ticket`, ticket );
  }

  updateStatus(id : number ,status : TicketStatus ):Observable<ResponceModel<TicketResponse>>{
    return this.httpClient
      .put<ResponceModel<TicketResponse>>(`${environment.apiUrl}Ticket?id=${id}&status=${status}` ,{} )
  }

}
