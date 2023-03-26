import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ArticleService } from './article.service';
import { catchError, delay, map, Observable, of, switchMap, tap } from 'rxjs';
import { Article, NewArticle } from '../interfaces/article';

const url = 'http://localhost:3000/api/articles';

@Injectable({
  providedIn: 'root',
})
export class HttpArticlesService extends ArticleService {
  constructor(private readonly http: HttpClient) {
    super();
  }

  override refresh(): Observable<void> {
    return of(undefined).pipe(
      delay(500),
      switchMap(() => this.http.get<Article[]>(url)),
      map((articles) => {
        this.articles$.next(articles);
      }),
      catchError((err) => {
        console.log('err: ', err);
        this.articles$.next([]);
        throw err;
      })
    );
  }

  override add(newArticle: NewArticle): Observable<void> {
    return of(undefined).pipe(
      delay(500),
      switchMap(() => this.http.post<void>(url, newArticle)),
      catchError((err) => {
        console.log('err: ', err);
        throw err;
      })
    );
  }

  override remove(ids: string[]): Observable<void> {
    return of(undefined).pipe(
      delay(500),
      switchMap(() =>
        this.http.delete<void>(url, {
          body: ids,
        })
      ),
      catchError((err) => {
        console.log('err: ', err);
        throw err;
      })
    );
  }
}
