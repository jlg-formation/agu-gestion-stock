import { Component } from '@angular/core';
import {
  faCircleNotch,
  faPlus,
  faRotateRight,
  faTrashAlt,
} from '@fortawesome/free-solid-svg-icons';
import { Observable, of, switchMap, tap } from 'rxjs';
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

  isLoading = true;

  constructor(protected readonly articleService: ArticleService) {
    this.articleService.articles$
      .pipe(
        tap(() => {
          this.isLoading = false;
        })
      )
      .subscribe();
  }

  refresh(): Observable<void> {
    return of(undefined).pipe(switchMap(() => this.articleService.refresh()));
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
