import { TestBed } from '@angular/core/testing';

import { ClientPetService } from './client-pet.service';

describe('ClientPetService', () => {
  let service: ClientPetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClientPetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
