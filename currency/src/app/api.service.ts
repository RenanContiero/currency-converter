import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';


const apiUrl = 'https://api.exchangeratesapi.io/latest';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  
  
  constructor(private http: HttpClient) { }

  // private handleError<T> (operation = 'operation', result?: T) {
  //   return (error: any): Observable<T> => {
  //   // TODO: send the error to remote logging infrastructure
  //   console.error(error); // log to console instead
  //   // Let the app keep running by returning an empty result.
  //   return of(result as T);
  //   };
  //   }

}
