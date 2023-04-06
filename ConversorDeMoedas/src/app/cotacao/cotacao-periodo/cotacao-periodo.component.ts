import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { NgxSpinnerService } from 'ngx-spinner';
import { DolarDataService } from 'src/app/services/dolar-data.service';

@Component({
  selector: 'app-cotacao-periodo',
  templateUrl: './cotacao-periodo.component.html',
  styleUrls: ['./cotacao-periodo.component.css']
})
export class CotacaoPeriodoComponent implements OnInit {

  dataInicial!: string;
  dataFinal!: string;
  dataFormatadaInicial!: string;
  dataFormatadaFinal!: string;
  results!: any[];

  constructor(
    private dolarDataService:DolarDataService,
    private spinner: NgxSpinnerService,
    ) { }

  ngOnInit(): void {
    this.results = [];

  }

  getCotacaoDolarPeriodo(dataIncial : string, dataFinal : string): void {
    this.dolarDataService.getCotacaoDolarPeriodo(dataIncial,dataFinal).subscribe({
      next: (result:any) => {
        this.results = result.value
        this.spinner.show();
      },
      error: (error:any) => {
        this.spinner.hide();
        console.log('Erro ao carregar os dados','Erro!');
      },
       complete: () => {
        this.spinner.hide();
       }
    });
  }

  onSubmit() {
    this.dataFormatadaInicial = moment(this.dataInicial).format('MM-DD-YYYY');
    this.dataFormatadaFinal = moment(this.dataFinal).format('MM-DD-YYYY');
    console.log("'"+this.dataFormatadaInicial+"'", "'"+this.dataFormatadaInicial+"'");

    this.getCotacaoDolarPeriodo("'"+this.dataFormatadaInicial+"'", "'"+this.dataFormatadaFinal+"'");
  }

  converteResult(value : number) : string {

    return value.toFixed(4).replace(".", ",");
  }
}
