import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment';
import { NgxSpinnerService } from 'ngx-spinner';
import { DolarDataService } from 'src/app/services/dolar-data.service';
import { MoedaService } from 'src/app/services/moeda.service';
import { ParidadeCotacaoService } from 'src/app/services/paridade-cotacao.service';

@Component({
  selector: 'app-paridade-dia',
  templateUrl: './paridade-dia.component.html',
  styleUrls: ['./paridade-dia.component.css']
})
export class ParidadeDiaComponent implements OnInit {

  dataFormatada!: string;
  results!: any[];
  moedas!: any[];

  form!: FormGroup;
  formulario: any;

  constructor(
    private paridadeCotacao:ParidadeCotacaoService,
    private moedaService:MoedaService,
    private formBuilder : FormBuilder,
    private spinner: NgxSpinnerService,

    ) {
      this.form = formBuilder.group({
        inputCurrency: ['', Validators.required],
        data: ['', Validators.required],
      })
    }

  ngOnInit(): void {
    this.getMoedas();
  }

  getCotacaoMoedaDia(moeda:string,data : string): void {
    this.paridadeCotacao.getCotacaoParidadeMoedaData(moeda, data).subscribe({
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

  getMoedas(): void {
    this.moedaService.getMoedas().subscribe({
      next: (_moedas:any) => {
        this.moedas = _moedas.value
        this.spinner.show();
      },
      error: (error:any) => {
        this.spinner.hide();
        console.log('Erro ao carregar os eventos','Erro!');
      },
       complete: () => this.spinner.hide()
    });
  }

  onSubmit() {
    this.formulario = this.form.value;
    this.dataFormatada = moment(this.formulario.data).format('MM-DD-YYYY');
    this.formulario.data = this.dataFormatada;

    this.getCotacaoMoedaDia(this.formulario.inputCurrency,this.formulario.data);
  }

  converteResult(value : number) : string {
    return value.toFixed(4).replace(".", ",");
  }


}
