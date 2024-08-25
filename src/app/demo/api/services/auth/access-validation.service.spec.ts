/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import AccessValidationService from './access-validation.service';

describe('Service: AccessValidation', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AccessValidationService]
    });
  });

  it('should ...', inject([AccessValidationService], (service: AccessValidationService) => {
    expect(service).toBeTruthy();
  }));
});
