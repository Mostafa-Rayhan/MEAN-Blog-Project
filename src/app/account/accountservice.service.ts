
import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Accountinfo} from './accountinfo'
 
@Injectable({
  providedIn: 'root'
})
export class AccountserviceService {
  url='http://localhost:3000/'
  constructor(private http:HttpClient) { }
  createaccount(accinfo:Accountinfo):Observable<Accountinfo>{
   
    return this.http.post<Accountinfo>(this.url+'api/register',accinfo)
  }
}
