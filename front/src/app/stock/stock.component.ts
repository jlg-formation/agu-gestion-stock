import { Component } from '@angular/core';
import {
  faPlus,
  faTrashAlt,
  faRotateRight,
} from '@fortawesome/free-solid-svg-icons';
import { ArticleService } from '../services/article.service';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.scss'],
})
export class StockComponent {
  faPlus = faPlus;
  faRotateRight = faRotateRight;
  faTrashAlt = faTrashAlt;

  constructor(protected readonly articleService: ArticleService) {}
}
