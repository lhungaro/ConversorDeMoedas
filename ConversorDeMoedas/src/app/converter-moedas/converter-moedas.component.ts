import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MoedaService } from '../services/moeda.service';
import { ParidadeCotacaoService } from '../services/paridade-cotacao.service';

@Component({
  selector: 'app-converter-moedas',
  templateUrl: './converter-moedas.component.html',
  styleUrls: ['./converter-moedas.component.css']
})
export class ConverterMoedasComponent implements OnInit {

  inputCurrency!: number;
  outputCurrency!: number;
  value!: number;
  date!: string;
  result!: number;
  moedas!: any[];


  constructor(
    private moedaService:MoedaService,
    private paridadeService:ParidadeCotacaoService
  ) { }

  ngOnInit(): void {
    this.getMoedas();
    console.log(this.moedas);

  }

  getMoedas(): void {
    this.moedaService.getMoedas().subscribe({
      next: (_moedas:any) => {
        this.moedas = _moedas.value
        console.log(_moedas.value);
      },
      error: (error:any) => {
        // this.spinner.hide();
        console.log('Erro ao carregar os eventos','Erro!');
      },
      //  complete: () => this.spinner.hide()
    });
  }

  getCotacaoParaConversao(moeda:string, data:string):void{
    this.moedaService.getMoedas().subscribe({
      next: (paridade:any) => {
        this.moedas = paridade.value
        console.log(paridade.value);

      },
      error: (error:any) => {
        // this.spinner.hide();
        console.log('Erro ao carregar os eventos','Erro!');
      },
      //  complete: () => this.spinner.hide()
    });
  }

  onSubmit() {

  }

}
