import { TestBed } from '@angular/core/testing';

import { CommandeFournisseurService } from './commande-fournisseur.service';

describe('CommandeFournisseurService', () => {
  let service: CommandeFournisseurService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommandeFournisseurService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
