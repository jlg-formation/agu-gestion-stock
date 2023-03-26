import { Component } from '@angular/core';
import {
  faCircleNotch,
  faPlus,
  faRotateRight,
  faTrashAlt,
} from '@fortawesome/free-solid-svg-icons';
import { catchError, map, Observable, of, switchMap, take, tap } from 'rxjs';
import { Article } from '../interfaces/article';
import { ArticleService } from '../services/article.service';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.scss'],
})
export class StockComponent {
  errorMsg = '';
  faPlus = faPlus;
  faRotateRight = faRotateRight;
  faTrashAlt = faTrashAlt;
  faCircleNotch = faCircleNotch;
  selectedArticles = new Set<Article>();

  constructor(protected readonly articleService: ArticleService) {
    if (articleService.articles$.value === undefined) {
      console.log('refreshing');

      articleService
        .refresh()
        .pipe(
          catchError((err) => {
            this.errorMsg = 'Erreur de chargement';
            return of(undefined);
          })
        )
        .subscribe();
    }
  }

  refresh(): Observable<void> {
    return of(undefined).pipe(
      switchMap(() => this.articleService.refresh()),
      catchError((err) => {
        this.errorMsg = 'Erreur de chargement';
        return of(undefined);
      })
    );
  }

  remove(): Observable<void> {
    return of(undefined).pipe(
      switchMap(() => {
        const ids = [...this.selectedArticles].map((a) => a.id);
        return this.articleService.remove(ids);
      }),
      switchMap(() => this.articleService.refresh()),
      tap(() => {
        this.selectedArticles.clear();
      })
    );
  }

  select(a: Article) {
    if (this.selectedArticles.has(a)) {
      this.selectedArticles.delete(a);
      return;
    }
    this.selectedArticles.add(a);
  }

  setError(errorMsg: string) {
    this.errorMsg = errorMsg;
  }
}
