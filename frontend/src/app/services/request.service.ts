import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environment/environment';
import { Observable } from 'rxjs';
import { catchError, retry, map } from 'rxjs/operators';

import { User } from '../interfaces/interface-user';
import { Articles } from '../interfaces/interface-articles';
@Injectable({
  providedIn: 'root'
})
export class RequestService {

  public action : string = "";
  public id : any;
  private url = environment.baseUrl;


  constructor(private http: HttpClient) { }

  // METHOD : GET
	// DETAILS : Get All Records
  getRequest(){

   let url = this.url + this.action;
   return this.http.get<Articles | User>(url);

  }
}
