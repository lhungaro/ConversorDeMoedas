import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DolarDataService {

  constructor(private http: HttpClient) { }

  baseURLDia = 'https://olinda.bcb.gov.br/olinda/servico/PTAX/versao/v1/odata/CotacaoDolarDia(dataCotacao=@dataCotacao)';
  baseURLPeriodo = 'https://olinda.bcb.gov.br/olinda/servico/PTAX/versao/v1/odata/CotacaoDolarPeriodo(dataInicial=@dataInicial,dataFinalCotacao=@dataFinalCotacao)';

  public getCotacaoDolarData(data : string) : Observable<any>{

    var httpOptions = {
      params : new HttpParams()
      .set('@dataCotacao', data)
      .set('$top', '100')
      .set('$format', 'json')

    };
    return this.http.get<any>(this.baseURLDia, httpOptions);
  }

  public getCotacaoDolarPeriodo(dataIncial : string, dataFinal : string) : Observable<any>{

    var httpOptions = {
      params : new HttpParams()
      .set('@dataInicial', dataIncial)
      .set('@dataFinalCotacao', dataFinal)
      .set('$top', '100')
      .set('$format', 'json')
    };

    return this.http.get<any>(this.baseURLPeriodo, httpOptions);
  }
}
