import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AberturaIntermediarioComponent } from './abertura-intermediario.component';

describe('AberturaIntermediarioComponent', () => {
  let component: AberturaIntermediarioComponent;
  let fixture: ComponentFixture<AberturaIntermediarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AberturaIntermediarioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AberturaIntermediarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
