import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ArticleService } from './article.service';

@Injectable({
  providedIn: 'root',
})
export class HttpArticlesService extends ArticleService {
  constructor(private readonly http: HttpClient) {
    super();
    console.log('http articles');
  }
}
