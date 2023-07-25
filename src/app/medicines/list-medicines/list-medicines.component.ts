import { Component } from '@angular/core';
import { Medicines } from '../../interfaces/medicines';
import { MedicinesService } from '../medicines.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-list-medicines',
  templateUrl: './list-medicines.component.html',
  styleUrls: ['./list-medicines.component.scss']
})
export class ListMedicinesComponent {
  medicines: Medicines[] = [];
  default: string = "Name";

  constructor(private medicinesService:MedicinesService,private formBuilder:FormBuilder){
    this.searchForm.controls['option'].setValue(this.default, {onlySelf: true});
  }
  
  searchForm = this.formBuilder.group({
   searchString: [''],
   option: ['ByName']
  });

  ngOnInit(){
    
    this.medicinesService.getMedicines()
    .subscribe(res=> this.medicines = res.data);

  }

  onSearch(){
    let searchString:string = this.searchForm.get(['searchString'])?.value;
    let option: string = this.searchForm.get(['option'])?.value;
    console.log(searchString);
    console.log(option);
    if(searchString.length != 0)
    {
       this.medicinesService.searchMedicine(searchString,option)
       .subscribe(res=> this.medicines = res.data);
    }
    else
    {
      this.medicinesService.getMedicines()
      .subscribe(res=> this.medicines = res.data);
    }
  }

}
