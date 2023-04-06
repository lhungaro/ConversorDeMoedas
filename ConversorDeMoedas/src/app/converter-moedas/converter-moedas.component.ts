import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MoedaService } from '../services/moeda.service';
import { ParidadeCotacaoService } from '../services/paridade-cotacao.service';
import { ConverterService } from '../services/converter.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-converter-moedas',
  templateUrl: './converter-moedas.component.html',
  styleUrls: ['./converter-moedas.component.css']
})
export class ConverterMoedasComponent implements OnInit {

  date!: string;
  result!: number;
  moedas!: any[];
  exchangeRate!: number;
  form!: FormGroup;
  formulario!:any;

  moedaEntrada!: string;
  moedaSaida!: string;
  valor!: string;

  constructor(
    private moedaService:MoedaService,
    private paridadeService:ParidadeCotacaoService,
    private converterService:ConverterService,
    private formBuilder : FormBuilder,

  ) {
    this.form = formBuilder.group({
      inputCurrency: ['', Validators.required],
      outputCurrency: ['', Validators.required],
      value: ['', Validators.required],
    })
  }

  ngOnInit(): void {
    this.getMoedas();
    console.log(this.moedas);
    this.result = 0;
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
      complete: () => {
        var real = {
          simbolo:'BRL',
          nomeFormatado:'Real'
        };
        this.moedas.push(real)
      }
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
    this.formulario = this.form.value;
    this.moedaEntrada = this.formulario.inputCurrency;
    this.moedaSaida = this.formulario.outputCurrency;
    this.valor = this.formulario.value;
    this.getExchangeRate();
  }

  getExchangeRate(){
    this.converterService.getExchangeRate(this.formulario.inputCurrency, this.formulario.outputCurrency)
      .subscribe((data: any) => {
        var objeto = this.formulario.inputCurrency+"_"+this.formulario.outputCurrency;
        this.exchangeRate = data[objeto]['price'];
        this.result = this.convert(this.formulario.value, this.exchangeRate)
      });
  }

  convert(amount: number, rate:number) {
    console.log("convert: " + amount, "rate: " + rate);

    var a = amount * rate;
    return a;
  }

  getNomeCompletoMoedaBySimbolo(simbolo:string) : any{
    var a = this.moedas.filter(moeda => moeda.simbolo === simbolo);
    return a[0].nomeFormatado + " ("+a[0].simbolo + ")";
  }
}



interface moeda{
  simbolo: string,
  nomeFormatado: string
}
