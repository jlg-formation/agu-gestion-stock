import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Article } from '../interfaces/article';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  articles$ = new BehaviorSubject<Article[]>([
    { id: 'a1', name: 'Tournevis', price: 3.99, qty: 124 },
    { id: 'a2', name: 'Pelle', price: 5, qty: 45 },
  ]);
  constructor() {}
}