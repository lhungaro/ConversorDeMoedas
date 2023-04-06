import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment';
import { NgxSpinnerService } from 'ngx-spinner';
import { MoedaService } from 'src/app/services/moeda.service';
import { ParidadeCotacaoService } from 'src/app/services/paridade-cotacao.service';

@Component({
  selector: 'app-abertura-intermediario',
  templateUrl: './abertura-intermediario.component.html',
  styleUrls: ['./abertura-intermediario.component.css']
})
export class AberturaIntermediarioComponent implements OnInit {

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
        moeda: ['', Validators.required],
        data: ['', Validators.required],
      })
    }

  ngOnInit(): void {
    this.getMoedas();
  }

  getCotacaoMoedaAberturaOuIntermediario(moeda:string,data : string): void {
    this.paridadeCotacao.getCotacaoMoedaAberturaOuIntermediario(moeda, data).subscribe({
      next: (result:any) => {
        this.results = result.value
        this.spinner.show();

      },
      error: (error:any) => {
        this.spinner.hide();
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

    this.getCotacaoMoedaAberturaOuIntermediario(this.formulario.moeda,this.formulario.data);
  }

  converteResult(value : number) : string {
    return value.toFixed(4).replace(".", ",");
  }


}
