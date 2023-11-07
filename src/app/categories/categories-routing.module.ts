import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListCategoriesComponent } from './list-categories/list-categories.component';
import { CreateCategoriesComponent } from './create-categories/create-categories.component';
import { EditCategoriesComponent } from './edit-categories/edit-categories.component';
import { DeleteCategoriesComponent } from './delete-categories/delete-categories.component';
import { ViewCategoriesComponent } from './view-categories/view-categories.component';
import { AuthGuard } from '../guards/auth.guard';

const routes: Routes = [
  {path: 'categories', canActivateChild:[AuthGuard] ,children: [
    {path: 'dashboard', component: ListCategoriesComponent},
    {path: 'create', component: CreateCategoriesComponent},
    {path: 'edit/:categoryId',component:EditCategoriesComponent},
    {path: 'delete/:categoryId',component:DeleteCategoriesComponent },
    {path: 'view/:categoryId', component:ViewCategoriesComponent }
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoriesRoutingModule { }
