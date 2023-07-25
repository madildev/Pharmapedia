import { CommonModule } from '@angular/common';

import { CategoriesRoutingModule } from './categories-routing.module';
import { ListCategoriesComponent } from './list-categories/list-categories.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { EditCategoriesComponent } from './edit-categories/edit-categories.component';
import { CreateCategoriesComponent } from './create-categories/create-categories.component';
import { ViewCategoriesComponent } from './view-categories/view-categories.component';
import { DeleteCategoriesComponent } from './delete-categories/delete-categories.component';

@NgModule({
  declarations: [
    ListCategoriesComponent,
    EditCategoriesComponent,
    CreateCategoriesComponent,
    ViewCategoriesComponent,
    DeleteCategoriesComponent,
  ],
  schemas: [NO_ERRORS_SCHEMA],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CategoriesRoutingModule,
    HttpClientModule
  ]
})
export class CategoriesModule { }
