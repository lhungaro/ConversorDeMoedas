import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParidadePeriodoComponent } from './paridade-periodo.component';

describe('ParidadePeriodoComponent', () => {
  let component: ParidadePeriodoComponent;
  let fixture: ComponentFixture<ParidadePeriodoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParidadePeriodoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParidadePeriodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
