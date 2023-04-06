import { Component, OnInit } from '@angular/core';
import { MoedaService } from '../services/moeda.service';
import { DolarDataService } from '../services/dolar-data.service';
import * as moment from 'moment';

@Component({
  selector: 'app-cotacao',
  templateUrl: './cotacao.component.html',
  styleUrls: ['./cotacao.component.css']
})
export class CotacaoComponent implements OnInit {

  data!: string;
  dataFormatada!: string;
  results!: any[];

  constructor(private dolarDataService:DolarDataService) { }

  ngOnInit(): void {


  }

  getCotacaoDolarDia(data : string): void {
    this.dolarDataService.getCotacaoDolarData(data).subscribe({
      next: (result:any) => {
        this.results = result.value


      },
      error: (error:any) => {
        // this.spinner.hide();
        console.log('Erro ao carregar os eventos','Erro!');
      },
       complete: () => {
        console.log(this.results);
       }
    });
  }

  getCotacaoDolarPeriodo(dataIncial : string, dataFinal : string): void {
    this.dolarDataService.getCotacaoDolarPeriodo(dataIncial,dataFinal).subscribe({
      next: (result:any) => {
        this.results = result.value


      },
      error: (error:any) => {
        // this.spinner.hide();
        console.log('Erro ao carregar os eventos','Erro!');
      },
       complete: () => {
        console.log(this.results);
       }
    });
  }

  onSubmit() {
    console.log(this.data);
    this.dataFormatada = moment(this.data).format('MM/DD/YYYY');
    this.data =  "'"+this.dataFormatada+"'";

    this.getCotacaoDolarDia(this.data);
  }

  converteResult(value : number) : string {

    return value.toFixed(4).replace(".", ",");
  }
}
