import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AuthModule } from './auth/auth.module';
import { CategoriesModule } from './categories/categories.module';
import { MedicinesModule } from './medicines/medicines.module';
import { AuthGuard } from './guards/auth.guard';
import { httpInterceptorProviders } from './interceptors';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    CategoriesModule,
    MedicinesModule,
    NgbModule
  ],
  providers: [
    AuthGuard,
    httpInterceptorProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
