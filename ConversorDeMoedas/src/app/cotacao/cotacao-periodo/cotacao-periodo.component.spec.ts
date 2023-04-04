import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CotacaoPeriodoComponent } from './cotacao-periodo.component';

describe('CotacaoPeriodoComponent', () => {
  let component: CotacaoPeriodoComponent;
  let fixture: ComponentFixture<CotacaoPeriodoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CotacaoPeriodoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CotacaoPeriodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
