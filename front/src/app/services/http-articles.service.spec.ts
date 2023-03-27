import { fakeAsync, flush, TestBed, tick } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

import { HttpArticlesService, url } from './http-articles.service';
import { newArticle } from '../test/articles.data';

describe('HttpArticlesService', () => {
  let service: HttpArticlesService;
  let ctrl: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(HttpArticlesService);
    ctrl = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    ctrl.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should refresh', fakeAsync(() => {
    service.refresh().subscribe();
    tick(500);
    const req = ctrl.expectOne(url);
    expect(req.request.method).toEqual('GET');
    req.flush([]);
    expect(service.articles$.value).toEqual([]);
  }));

  it('should refresh in error', fakeAsync(() => {
    let shouldGoHere = false;
    service.articles$.next(undefined);
    service.refresh().subscribe({
      error: () => {
        shouldGoHere = true;
      },
    });
    tick(500);
    const req = ctrl.expectOne(url);
    expect(req.request.method).toEqual('GET');
    req.flush('', { status: 404, statusText: 'Not Found xxx' });
    expect(service.articles$.value).toEqual([]);
    expect(shouldGoHere).toBe(true);
    flush();
  }));

  it('should add', fakeAsync(() => {
    service.add(newArticle).subscribe();
    tick(500);
    const req = ctrl.expectOne(url);
    expect(req.request.method).toEqual('POST');
    req.flush('', { status: 201, statusText: 'Created' });
  }));

  it('should add in error', fakeAsync(() => {
    let shouldGoHere = false;
    service.add(newArticle).subscribe({
      error: () => {
        shouldGoHere = true;
      },
    });
    tick(500);
    const req = ctrl.expectOne(url);
    expect(req.request.method).toEqual('POST');
    req.flush('', { status: 500, statusText: 'Internal Error' });
    expect(shouldGoHere).toBe(true);
    flush();
  }));

  it('should remove', fakeAsync(() => {
    service.remove([]).subscribe();
    tick(500);
    const req = ctrl.expectOne(url);
    expect(req.request.method).toEqual('DELETE');
    req.flush('', { status: 204, statusText: 'No Content' });
  }));

  it('should remove in error', fakeAsync(() => {
    let shouldGoHere = false;
    service.remove([]).subscribe({
      error: () => {
        shouldGoHere = true;
      },
    });
    tick(500);
    const req = ctrl.expectOne(url);
    expect(req.request.method).toEqual('DELETE');
    req.flush('', { status: 500, statusText: 'Internal Error' });
    expect(shouldGoHere).toBe(true);
    flush();
  }));
});
