import { fakeAsync, TestBed, tick } from '@angular/core/testing';
import { articles, newArticle } from '../test/articles.data';

import { ArticleService } from './article.service';

describe('ArticleService', () => {
  let service: ArticleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArticleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should refresh', fakeAsync(() => {
    service.refresh().subscribe();
    tick(500);
    expect(service.articles$.value).toEqual([]);
  }));

  it('should add', fakeAsync(() => {
    service.articles = [];
    service.add(newArticle).subscribe();
    tick(500);
    expect(service.articles.length).toBe(1);
  }));

  it('should add in error', fakeAsync(() => {
    let shouldGoHere = false;
    service.add({ ...newArticle, name: 'Trucx' }).subscribe({
      error: () => {
        shouldGoHere = true;
      },
    });
    tick(500);
    expect(shouldGoHere).toBe(true);
  }));

  it('should remove', fakeAsync(() => {
    service.articles = articles;
    service.remove(['a1']).subscribe();
    tick(500);
    expect(service.articles.length).toBe(1);
  }));

  it('should remove in error', fakeAsync(() => {
    let shouldGoHere = false;
    service.articles = articles;
    service.remove(['a1', 'a2']).subscribe({
      error: () => {
        shouldGoHere = true;
      },
    });
    tick(500);
    expect(service.articles.length).toBe(2);
    expect(shouldGoHere).toBe(true);
  }));
});
