import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = 'https://api.exchangeratesapi.io/latest';

  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get(this.apiUrl);

  }

  // private handleError<T> (operation = 'operation', result?: T) {
  //   return (error: any): Observable<T> => {
  //   // TODO: send the error to remote logging infrastructure
  //   console.error(error); // log to console instead
  //   // Let the app keep running by returning an empty result.
  //   return of(result as T);
  //   };
  //   }

}
