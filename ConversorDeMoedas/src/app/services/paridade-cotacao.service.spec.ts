import { TestBed } from '@angular/core/testing';

import { ParidadeCotacaoService } from './paridade-cotacao.service';

describe('ParidadeCotacaoService', () => {
  let service: ParidadeCotacaoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ParidadeCotacaoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
