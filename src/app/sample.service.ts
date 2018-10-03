
import {throwError as observableThrowError, Observable} from 'rxjs';

import {catchError} from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient,HttpErrorResponse } from '@angular/common/http';
import {student} from './student';
import {rdata} from './routedata';

@Injectable({
  providedIn: 'root'
})
export class SampleService {



  vgnbh 



  0
  //full url
  private full_url:string="http://localhost:4200/assets/sampledata/sample.data.json";

  //right url
  private _url:string="assets/sampledata/sample.data.json";

  //wrong url
  private _errorurl:string="/assets/sampledata/sample.data1.json";
  
  //route url
  private _routedata:string="assets/sampledata/routingdata.json";

  constructor(private http:HttpClient ) { }

  //Hardcoded data 
  getdata(){
    return[
      {"Slno":1,"Product":"A1","Price":500},
      {"Slno":2,"Product":"B1","Price":100},
      {"Slno":3,"Product":"C1","Price":800},

    ]
  }

  //get dynamic data
 getdynamicdata():Observable<student[]> {
    return this.http.get<student[]>(this._url).pipe(
        catchError(this.errorHandler));

       
  }
  errorHandler(error: HttpErrorResponse){
      return observableThrowError(error.message || "Server Error");
 }

 //handling error
 geterrorhandling():Observable<student[]> {
  return this.http.get<student[]>(this._errorurl).pipe(
      catchError(this.errorHandler));

     
}

 //get routing data
  getroutingdata():Observable<rdata[]> {
       return this.http.get<rdata[]>(this._routedata)
  }

}
