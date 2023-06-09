import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { HomeComponent } from './routes/home/home.component';
import { LegalComponent } from './routes/legal/legal.component';
import { ArticleService } from './services/article.service';
import { HttpArticlesService } from './services/http-articles.service';

import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr-BE';

registerLocaleData(localeFr, 'fr-BE');

@NgModule({
  declarations: [AppComponent, HomeComponent, LegalComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    FontAwesomeModule,
    HttpClientModule,
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'fr-BE' },
    { provide: DEFAULT_CURRENCY_CODE, useValue: 'EUR' },
    { provide: ArticleService, useClass: HttpArticlesService },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
