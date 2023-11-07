import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { MedicinesService } from '../medicines.service';
import { Medicines } from 'src/app/interfaces/medicines';
import { Categories } from '../../interfaces/categories';
import { FormBuilder, Validators } from '@angular/forms';
import { CategoriesService } from 'src/app/categories/categories.service';

@Component({
  selector: 'app-create-medicines',
  templateUrl: './create-medicines.component.html',
  styleUrls: ['./create-medicines.component.scss']
})
export class CreateMedicinesComponent {

  categories!: Categories[];
  default: number = 0;
  body: Medicines = {
    id: 0,
    categoryId: 0,
    name: '',
    description: '',
    use: '',
    createdDate: '2023-07-24T12:00:23.443Z',
    updatedDate: '2023-07-24T12:00:23.443Z',
  };

  constructor(private location: Location, private medicinesService: MedicinesService, private formBuilder: FormBuilder, private categoriesService: CategoriesService) { }

  ngOnInit(): void {
    this.categoriesService.getCategories()
      .subscribe(res => this.categories = res.data);
  }

  createForm = this.formBuilder.group({
    categoryId: [0],
    name: ['', Validators.required],
    description: ['', Validators.required],
    use: ['', Validators.required]
  });

  onCreate() {

    if (this.createForm.invalid) {
      return;
    }

    this.setFormData();
    this.medicinesService.createMedicine(this.body)
      .subscribe(res => {
        alert(res.message);
        this.goBack();
      }, err =>{
        alert(err.message);
      });
  }

  setFormData() {
    this.body.categoryId = this.createForm.get(['categoryId'])?.value;
    this.body.name = this.createForm.get(['name'])?.value;
    this.body.description = this.createForm.get(['description'])?.value;
    this.body.use = this.createForm.get(['use'])?.value;
  }


  goBack() {
    this.location.back();
  }

}
