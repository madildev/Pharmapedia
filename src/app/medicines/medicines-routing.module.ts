import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateMedicinesComponent } from './create-medicines/create-medicines.component';
import { EditMedicinesComponent } from './edit-medicines/edit-medicines.component';
import { DeleteMedicinesComponent } from './delete-medicines/delete-medicines.component';
import { ViewMedicinesComponent } from './view-medicines/view-medicines.component';
import { ListMedicinesComponent } from './list-medicines/list-medicines.component';
import { AuthGuard } from '../guards/auth.guard';

const routes: Routes = [
  {path:'medicines',canActivateChild:[AuthGuard] ,children: [
    {path: 'create' , component: CreateMedicinesComponent},
    {path: 'edit/:medicineId', component: EditMedicinesComponent},
    {path: 'delete/:medicineId',component: DeleteMedicinesComponent},
    {path: 'view/:medicineId', component: ViewMedicinesComponent},
    {path: 'dashboard', component: ListMedicinesComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MedicinesRoutingModule { }
