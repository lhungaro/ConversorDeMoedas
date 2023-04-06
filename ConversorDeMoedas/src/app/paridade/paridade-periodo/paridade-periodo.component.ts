import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment';
import { NgxSpinnerService } from 'ngx-spinner';
import { DolarDataService } from 'src/app/services/dolar-data.service';
import { MoedaService } from 'src/app/services/moeda.service';
import { ParidadeCotacaoService } from 'src/app/services/paridade-cotacao.service';

@Component({
  selector: 'app-paridade-periodo',
  templateUrl: './paridade-periodo.component.html',
  styleUrls: ['./paridade-periodo.component.css']
})
export class ParidadePeriodoComponent implements OnInit {

  dataFormatada!: string;
  results!: any[];
  moedas!: any[];

  form!: FormGroup;
  formulario: any;

  constructor(
    private paridadeCotacao:ParidadeCotacaoService,
    private moedaService:MoedaService,
    private formBuilder : FormBuilder,
    private spinner : NgxSpinnerService,
    ) {
      this.form = formBuilder.group({
        moeda: ['', Validators.required],
        dataInicial: ['', Validators.required],
        dataFinal: ['', Validators.required],
      })
    }

  ngOnInit(): void {
    this.getMoedas();
  }

  getCotacaoMoedaPeriodo(moeda:string,dataIncial : string,dataFinal : string): void {
    this.paridadeCotacao.getCotacaoParidadeMoedaPeriodo(moeda, dataIncial,dataFinal ).subscribe({
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
    this.formulario.dataInicial =  moment(this.formulario.dataInicial).format('MM-DD-YYYY');
    this.formulario.dataFinal =  moment(this.formulario.dataFinal).format('MM-DD-YYYY');

    this.getCotacaoMoedaPeriodo(this.formulario.moeda,this.formulario.dataInicial,this.formulario.dataFinal);
  }

  converteResult(value : number) : string {
    return value.toFixed(4).replace(".", ",");
  }


}
