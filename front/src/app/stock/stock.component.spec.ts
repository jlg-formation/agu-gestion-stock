import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { of, throwError } from 'rxjs';
import { ArticleService } from '../services/article.service';
import { a1 } from '../test/articles.data';
import { WidgetsModule } from '../widgets/widgets.module';

import { StockComponent } from './stock.component';

describe('StockComponent', () => {
  let component: StockComponent;
  let fixture: ComponentFixture<StockComponent>;
  let articleService: ArticleService;

  beforeEach(async () => {
    articleService = new ArticleService();

    await TestBed.configureTestingModule({
      imports: [WidgetsModule, FontAwesomeModule],
      declarations: [StockComponent],
      providers: [{ provide: ArticleService, useValue: articleService }],
    }).compileComponents();
  });

  it('should create', () => {
    articleService.refresh = jasmine.createSpy().and.returnValue(of(undefined));
    fixture = TestBed.createComponent(StockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    expect(component).toBeTruthy();
  });

  it('should create with refresh error', () => {
    articleService.refresh = jasmine
      .createSpy()
      .and.returnValue(throwError(() => new Error('oups')));

    fixture = TestBed.createComponent(StockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should refresh', () => {
    articleService.refresh = jasmine.createSpy().and.returnValue(of(undefined));
    fixture = TestBed.createComponent(StockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    component.refresh().subscribe();

    expect(component).toBeTruthy();
  });

  it('should refresh', () => {
    articleService.refresh = jasmine
      .createSpy()
      .and.returnValue(throwError(() => new Error('oups')));
    fixture = TestBed.createComponent(StockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    component.refresh().subscribe();

    expect(component).toBeTruthy();
  });

  it('should remove', () => {
    articleService.refresh = jasmine.createSpy().and.returnValue(of(undefined));
    articleService.remove = jasmine.createSpy().and.returnValue(of(undefined));
    fixture = TestBed.createComponent(StockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    component.selectedArticles.add(a1);
    component.remove().subscribe();

    expect(component).toBeTruthy();
  });

  it('should remove in error', () => {
    articleService.refresh = jasmine.createSpy().and.returnValue(of(undefined));
    articleService.remove = jasmine
      .createSpy()
      .and.returnValue(throwError(() => new Error('oups')));
    fixture = TestBed.createComponent(StockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    component.selectedArticles.add(a1);
    component.remove().subscribe();

    expect(component).toBeTruthy();
  });

  it('should select and unselect', () => {
    fixture = TestBed.createComponent(StockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    component.select(a1);
    component.select(a1);

    expect(component).toBeTruthy();
  });

  it('should set an error', () => {
    fixture = TestBed.createComponent(StockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    component.setError('oups');
    expect(component).toBeTruthy();
  });
});
