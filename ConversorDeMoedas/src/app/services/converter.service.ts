import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConverterService {

  constructor(private http: HttpClient) {}

  token = '3126|Nwd5VthhP7OhzcAuJCMc8fhP4rGTspMp'

  getExchangeRate(baseCurrency: string, targetCurrency: string) {
    return this.http.get(`https://api.invertexto.com/v1/currency/${baseCurrency}_${targetCurrency}?token=${this.token}`);
  }
}

