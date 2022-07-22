import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Country } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrlv2: string= 'https://restcountries.com/v2';
  private apiUrlv3: string= 'https://restcountries.com/v3.1';

  get httpParams () {
    return new HttpParams().set('fields', 'name,capital,cca2,flags,population,alpha2Code');
  }

  constructor(private http: HttpClient) { }

    buscarPais(termino: string): Observable<Country[]>{
      const url = `${this.apiUrlv2}/name/${termino}`;
      return this.http.get<Country[]>(url);  
    }


    buscarCapital(termino: string): Observable<Country[]>{
      const url = `${this.apiUrlv2}/capital/${termino}`;
      return this.http.get<Country[]>(url);  
    }

    ObtenerPaisCodigo(id: string): Observable<Country>{
      const url = `${this.apiUrlv3}/alpha/${id}`;
      return this.http.get<Country>(url);  
    }

    buscarRegion( region: string ): Observable<Country[]> {

      const url = `${ this.apiUrlv2 }/regionalbloc/${ region }`;
  
      return this.http.get<Country[]>( url, { params: this.httpParams } )
              .pipe(
                tap( console.log )
              )
    }

}
