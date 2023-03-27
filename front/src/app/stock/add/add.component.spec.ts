import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { of, throwError } from 'rxjs';
import { ArticleService } from 'src/app/services/article.service';
import { WidgetsModule } from 'src/app/widgets/widgets.module';

import { AddComponent } from './add.component';

describe('AddComponent', () => {
  let component: AddComponent;
  let fixture: ComponentFixture<AddComponent>;
  const articleService = new ArticleService();

  beforeEach(async () => {
    articleService.add = jasmine.createSpy().and.returnValue(of(undefined));
    articleService.refresh = jasmine.createSpy().and.returnValue(of(undefined));
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, WidgetsModule, ReactiveFormsModule],
      providers: [{ provide: ArticleService, useValue: articleService }],
      declarations: [AddComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should submit', () => {
    component.submit();
    expect(component).toBeTruthy();
  });

  it('should submit in error', () => {
    articleService.refresh = jasmine
      .createSpy()
      .and.returnValue(throwError(() => new Error('oups')));
    component.submit();
    expect(component).toBeTruthy();
  });
});
