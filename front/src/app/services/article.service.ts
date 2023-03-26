import { Injectable } from '@angular/core';
import { BehaviorSubject, delay, Observable, of, tap } from 'rxjs';
import { Article, NewArticle } from '../interfaces/article';

const generateId = () => {
  return Date.now() + '_' + Math.floor(Math.random() * 1e12);
};

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  articles: Article[] = [];
  articles$ = new BehaviorSubject<Article[] | undefined>(undefined);

  constructor() {}

  add(newArticle: NewArticle): Observable<void> {
    return of(undefined).pipe(
      delay(500),

      tap(() => {
        if (newArticle.name === 'Trucx') {
          throw new Error('Trucx is forbidden');
        }
        const article = { ...newArticle, id: generateId() };
        this.articles.push(article);
      })
    );
  }

  refresh(): Observable<void> {
    return of(undefined).pipe(
      delay(500),
      tap(() => {
        this.articles$.next(this.articles);
      })
    );
  }

  remove(ids: string[]): Observable<void> {
    return of(undefined).pipe(
      delay(500),
      tap(() => {
        if (ids.length === 2) {
          throw new Error('Cannot remove 2 items at once.');
        }

        this.articles = this.articles.filter((a) => !ids.includes(a.id));
      })
    );
  }
}
