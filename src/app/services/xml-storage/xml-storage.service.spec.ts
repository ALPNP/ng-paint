import { TestBed, inject } from '@angular/core/testing';

import { XmlStorageService } from './xml-storage.service';

describe('XmlStorageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [XmlStorageService]
    });
  });

  it('should be created', inject([XmlStorageService], (service: XmlStorageService) => {
    expect(service).toBeTruthy();
  }));
});
