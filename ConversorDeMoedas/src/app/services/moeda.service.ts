import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoedaService {

  constructor(private http: HttpClient) { }

  baseURL = 'https://olinda.bcb.gov.br/olinda/servico/PTAX/versao/v1/odata/Moedas?$top=100&$format=json';

  public getMoedas() : Observable<any>{
    return this.http.get<any>(this.baseURL);
  }

}
