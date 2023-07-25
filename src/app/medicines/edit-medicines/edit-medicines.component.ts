import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MedicinesService } from '../medicines.service';
import { CategoriesService } from 'src/app/categories/categories.service';
import { Categories } from 'src/app/interfaces/categories';
import { Medicines } from 'src/app/interfaces/medicines';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-medicines',
  templateUrl: './edit-medicines.component.html',
  styleUrls: ['./edit-medicines.component.scss']
})
export class EditMedicinesComponent {

  categories!: Categories[];
  medicineId!: number;
  medicine!: Medicines;

  constructor(private location: Location, private route: ActivatedRoute, private medicinesService: MedicinesService, private categoriesService: CategoriesService, private formBuilder: FormBuilder) { }

  editForm = this.formBuilder.group({
    id: [0],
    categoryId: [0],
    name: ['', Validators.required],
    description: ['', Validators.required],
    use: ['', Validators.required],
    createdDate: [''],
    updatedDate: ['']
  });


  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    this.medicineId = Number(routeParams.get('medicineId'));

    this.medicinesService.getMedicine(this.medicineId)
      .subscribe(res => {
        this.medicine = res.data;
        this.setFormData();
      });

    this.categoriesService.getCategories()
      .subscribe(res => this.categories = res.data);
  }

  onEdit() {

    if (this.editForm.invalid) {
      return;
    }

    this.medicinesService.editMedicine(this.medicineId, <Medicines>this.editForm.value)
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

  setFormData() {
    this.editForm.patchValue({
      id: this.medicine.id,
      categoryId: this.medicineId,
      name: this.medicine.name,
      description: this.medicine.description,
      use: this.medicine.use,
      createdDate: this.medicine.createdDate,
      updatedDate: this.medicine.updatedDate
    });
  }
}
