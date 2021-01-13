/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AuthgaurdService } from './authgaurd.service';

describe('Service: Authgaurd', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthgaurdService]
    });
  });

  it('should ...', inject([AuthgaurdService], (service: AuthgaurdService) => {
    expect(service).toBeTruthy();
  }));
});
