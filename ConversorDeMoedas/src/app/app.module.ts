import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ConverterMoedasComponent } from './converter-moedas/converter-moedas.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CotacaoComponent } from './cotacao/cotacao.component';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CotacaoDiaComponent } from './cotacao/cotacao-dia/cotacao-dia.component';
import { CotacaoPeriodoComponent } from './cotacao/cotacao-periodo/cotacao-periodo.component';
import { ParidadeComponent } from './paridade/paridade.component';
import { ParidadeDiaComponent } from './paridade/paridade-dia/paridade-dia.component';
import { ParidadePeriodoComponent } from './paridade/paridade-periodo/paridade-periodo.component';
import { AberturaIntermediarioComponent } from './paridade/abertura-intermediario/abertura-intermediario.component';
import { PeriodoFechamentoComponent } from './paridade/periodo-fechamento/periodo-fechamento.component';
import { NgxSpinnerModule } from "ngx-spinner";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { TabsModule } from 'ngx-bootstrap/tabs';

const routes: Routes = [
  { path: '', component: ConverterMoedasComponent },
  { path: 'converter-moedas', component: ConverterMoedasComponent },
  { path: 'cotacao', component: CotacaoComponent,
    children: [
      { path: '', component: CotacaoDiaComponent},
      { path: 'dia', component: CotacaoDiaComponent},
      { path: 'periodo', component: CotacaoPeriodoComponent},
  ] },
  { path: 'paridade', component: ParidadeComponent,
  children: [
    { path: '', component: ParidadeDiaComponent},
    { path: 'dia', component: ParidadeDiaComponent},
    { path: 'periodo', component: ParidadePeriodoComponent},
    { path: 'abertura-intermediario', component: AberturaIntermediarioComponent},
    { path: 'periodo-fechamento', component: PeriodoFechamentoComponent},
  ] },
];

interface NgxSpinnerConfig {
  type?: string;
}

@NgModule({
  declarations: [
    AppComponent,
    ConverterMoedasComponent,
    CotacaoComponent,
    CotacaoDiaComponent,
    CotacaoPeriodoComponent,
    ParidadeComponent,
    ParidadeDiaComponent,
    ParidadePeriodoComponent,
    AberturaIntermediarioComponent,
    PeriodoFechamentoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    CommonModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    NgxSpinnerModule.forRoot({ type: 'ball-scale-multiple' }),
    TabsModule.forRoot(),
  ],

  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
