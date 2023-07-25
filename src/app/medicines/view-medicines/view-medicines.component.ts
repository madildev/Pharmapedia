import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Medicines } from 'src/app/interfaces/medicines';
import { MedicinesService } from '../medicines.service';

@Component({
  selector: 'app-view-medicines',
  templateUrl: './view-medicines.component.html',
  styleUrls: ['./view-medicines.component.scss']
})
export class ViewMedicinesComponent {

  medicineId!: number;
  medicine!: Medicines;

  constructor(private location: Location, private route:ActivatedRoute, private medicinesService:MedicinesService){}
  
  ngOnInit():void{
    
    const routeParams = this.route.snapshot.paramMap;
    this.medicineId = Number(routeParams.get('medicineId'));
    
    this.medicinesService.getMedicine(this.medicineId)
    .subscribe(res=> this.medicine = res.data);
  }

  goBack(){
    this.location.back();
  }


}
