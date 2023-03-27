import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { HttpArticlesService } from './http-articles.service';

describe('HttpArticlesService', () => {
  let service: HttpArticlesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(HttpArticlesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
