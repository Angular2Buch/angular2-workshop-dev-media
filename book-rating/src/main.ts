import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AppComponent, environment } from './app/';
import { disableDeprecatedForms, provideForms } from '@angular/forms';
import { HTTP_PROVIDERS } from '@angular/http';
import { RouterConfig, provideRouter } from '@angular/router';

import { DashboardComponent } from './app/dashboard/';
import { BookDetailsComponent } from './app/book-details/';

if (environment.production) {
  enableProdMode();
}

const AppRoutes: RouterConfig = [
  { path: '', component: DashboardComponent },
  { path: 'book/:isbn', component: BookDetailsComponent }
];

bootstrap(AppComponent, [
  disableDeprecatedForms(),
  provideForms(),
  HTTP_PROVIDERS,
  provideRouter(AppRoutes)
]);

