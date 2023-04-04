import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeriodoFechamentoComponent } from './periodo-fechamento.component';

describe('PeriodoFechamentoComponent', () => {
  let component: PeriodoFechamentoComponent;
  let fixture: ComponentFixture<PeriodoFechamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PeriodoFechamentoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PeriodoFechamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
