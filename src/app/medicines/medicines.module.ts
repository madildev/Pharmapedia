import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MedicinesRoutingModule } from './medicines-routing.module';
import { CreateMedicinesComponent } from './create-medicines/create-medicines.component';
import { ViewMedicinesComponent } from './view-medicines/view-medicines.component';
import { EditMedicinesComponent } from './edit-medicines/edit-medicines.component';
import { DeleteMedicinesComponent } from './delete-medicines/delete-medicines.component';
import { ListMedicinesComponent } from './list-medicines/list-medicines.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CreateMedicinesComponent,
    ViewMedicinesComponent,
    EditMedicinesComponent,
    DeleteMedicinesComponent,
    ListMedicinesComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MedicinesRoutingModule
  ]
})
export class MedicinesModule { }
