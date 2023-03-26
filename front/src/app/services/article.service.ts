import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, tap } from 'rxjs';
import { Article, NewArticle } from '../interfaces/article';

const generateId = () => {
  return Date.now() + '_' + Math.floor(Math.random() * 1e12);
};

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  articles$ = new BehaviorSubject<Article[]>([
    { id: 'a1', name: 'Tournevis', price: 3.99, qty: 124 },
    { id: 'a2', name: 'Pelle', price: 5, qty: 45 },
  ]);

  constructor() {}

  add(newArticle: NewArticle): Observable<void> {
    return of(undefined).pipe(
      tap(() => {
        const article = { ...newArticle, id: generateId() };
        this.articles$.value.push(article);
        this.articles$.next(this.articles$.value);
      })
    );
  }
}
