import { TestBed } from '@angular/core/testing';

import { SolicitarInsigniaService } from './solicitar-insignia.service';

describe('SolicitarInsigniaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SolicitarInsigniaService = TestBed.get(SolicitarInsigniaService);
    expect(service).toBeTruthy();
  });
});
