import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ParidadeCotacaoService {

  constructor(private http: HttpClient) { }

  baseURLDia = 'https://olinda.bcb.gov.br/olinda/servico/PTAX/versao/v1/odata/CotacaoMoedaDia(moeda=@moeda,dataCotacao=@dataCotacao)';
  baseURLPeriodo = 'https://olinda.bcb.gov.br/olinda/servico/PTAX/versao/v1/odata/CotacaoMoedaPeriodo(moeda=@moeda,dataInicial=@dataInicial,dataFinalCotacao=@dataFinalCotacao)';
  baseURLAberturaIntermediario = 'https://olinda.bcb.gov.br/olinda/servico/PTAX/versao/v1/odata/CotacaoMoedaAberturaOuIntermediario(codigoMoeda=@codigoMoeda,dataCotacao=@dataCotacao)';
  baseURLPeriodoFechamento = 'https://olinda.bcb.gov.br/olinda/servico/PTAX/versao/v1/odata/CotacaoMoedaPeriodoFechamento(codigoMoeda=@codigoMoeda,dataInicialCotacao=@dataInicialCotacao,dataFinalCotacao=@dataFinalCotacao)';


  public getCotacaoParidadeMoedaData(moeda : string ,data : string) : Observable<any>{

    var httpOptions = {
      params : new HttpParams()
      .set('@moeda', "'"+moeda+"'")
      .set('@dataCotacao', "'"+data+"'")
      .set('$top', '100')
      .set('$format', 'json')

    };
    return this.http.get<any>(this.baseURLDia, httpOptions);
  }

  public getCotacaoParidadeMoedaPeriodo(moeda : string ,dataInicial : string, dataFinal : string) : Observable<any>{

    var httpOptions = {
      params : new HttpParams()
      .set('@moeda', "'"+moeda+"'")
      .set('@dataInicial', "'"+dataInicial+"'")
      .set('@dataFinalCotacao', "'"+dataFinal+"'")
      .set('$top', '100')
      .set('$format', 'json')

    };
    return this.http.get<any>(this.baseURLPeriodo, httpOptions);
  }

  public getCotacaoMoedaAberturaOuIntermediario(moeda : string ,data : string) : Observable<any>{

    var httpOptions = {
      params : new HttpParams()
      .set('@codigoMoeda', "'"+moeda+"'")
      .set('@dataCotacao', "'"+data+"'")
      .set('$format', 'json')

    };
    return this.http.get<any>(this.baseURLAberturaIntermediario, httpOptions);
  }

  public getCotacaoMoedaPeriodoFechamento(moeda : string ,dataInicial : string, dataFinal : string) : Observable<any>{

    var httpOptions = {
      params : new HttpParams()
      .set('@codigoMoeda', "'"+moeda+"'")
      .set('@dataInicialCotacao', "'"+dataInicial+"'")
      .set('@dataFinalCotacao', "'"+dataFinal+"'")
      .set('$format', 'json')

    };
    return this.http.get<any>(this.baseURLPeriodoFechamento, httpOptions);
  }
}
