import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Medicines } from 'src/app/interfaces/medicines';
import { MedicinesService } from '../medicines.service';

@Component({
  selector: 'app-delete-medicines',
  templateUrl: './delete-medicines.component.html',
  styleUrls: ['./delete-medicines.component.scss']
})
export class DeleteMedicinesComponent {

  medicineId!: number;
  medicine!: Medicines;

  constructor(private location: Location, private route: ActivatedRoute, private medicinesService: MedicinesService) { }

  ngOnInit(): void {

    const routeParams = this.route.snapshot.paramMap;
    this.medicineId = Number(routeParams.get('medicineId'));

    this.medicinesService.getMedicine(this.medicineId)
      .subscribe(res => this.medicine = res.data);
  }

  onDelete() {
    this.medicinesService.deleteMedicine(this.medicineId)
      .subscribe(res => {
        alert(res.message);
        this.goBack();
      }, err => {
        alert(err.message);
      });

  }

  goBack() {
    this.location.back();
  }
}
