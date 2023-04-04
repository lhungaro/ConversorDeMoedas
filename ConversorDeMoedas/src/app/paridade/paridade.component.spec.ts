import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParidadeComponent } from './paridade.component';

describe('ParidadeComponent', () => {
  let component: ParidadeComponent;
  let fixture: ComponentFixture<ParidadeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParidadeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParidadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
