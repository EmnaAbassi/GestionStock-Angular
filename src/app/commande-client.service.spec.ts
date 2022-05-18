import { TestBed } from '@angular/core/testing';

import { CommandeClientService } from './commande-client.service';

describe('CommandeClientService', () => {
  let service: CommandeClientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommandeClientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
