import { TestBed } from '@angular/core/testing';

import { HttpArticlesService } from './http-articles.service';

describe('HttpArticlesService', () => {
  let service: HttpArticlesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpArticlesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
