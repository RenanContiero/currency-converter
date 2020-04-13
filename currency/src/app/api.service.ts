import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';


const apiUrl = 'https://api.exchangeratesapi.io/latest?base=';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

    getData(coins: string) {
      return this.http.get(apiUrl+coins); 
   }

  // listar(){
  //   return this.http.get<any[]>(`${apiUrl}`);

  // }


  // private handleError<T> (operation = 'operation', result?: T) {
  //   return (error: any): Observable<T> => {
  //   // TODO: send the error to remote logging infrastructure
  //   console.error(error); // log to console instead
  //   // Let the app keep running by returning an empty result.
  //   return of(result as T);
  //   };
  //   }

}
