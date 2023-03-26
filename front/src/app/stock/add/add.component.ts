import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { of, switchMap } from 'rxjs';
import { NewArticle } from 'src/app/interfaces/article';
import { ArticleService } from 'src/app/services/article.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
})
export class AddComponent {
  faPlus = faPlus;

  f = new FormGroup({
    name: new FormControl('Truc', [
      Validators.required,
      Validators.minLength(3),
    ]),
    price: new FormControl(0, [Validators.required, Validators.min(0)]),
    qty: new FormControl(0, [Validators.required, Validators.min(0)]),
  });

  constructor(
    private readonly articleService: ArticleService,
    private router: Router
  ) {}

  submit() {
    of(undefined)
      .pipe(
        switchMap(() => {
          const newArticle = this.f.value as unknown as NewArticle;
          return this.articleService.add(newArticle);
        }),
        switchMap(() => {
          return this.router.navigateByUrl('/stock');
        })
      )
      .subscribe();
  }
}
