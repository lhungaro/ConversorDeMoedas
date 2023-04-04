import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParidadeDiaComponent } from './paridade-dia.component';

describe('ParidadeDiaComponent', () => {
  let component: ParidadeDiaComponent;
  let fixture: ComponentFixture<ParidadeDiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParidadeDiaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParidadeDiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
