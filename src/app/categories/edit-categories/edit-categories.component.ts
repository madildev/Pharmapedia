import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { FormBuilder, Validators } from '@angular/forms';
import { Categories } from 'src/app/interfaces/categories';
import { ActivatedRoute } from '@angular/router';
import { CategoriesService } from '../categories.service';

@Component({
  selector: 'app-edit-categories',
  templateUrl: './edit-categories.component.html',
  styleUrls: ['./edit-categories.component.scss']
})

export class EditCategoriesComponent {

  categoryId!: number;
  category!: Categories;

  constructor(private location: Location, private categoriesService: CategoriesService, private formBuilder: FormBuilder, private route: ActivatedRoute) { }

  editForm = this.formBuilder.group({
    id: [0],
    name: ['', Validators.required],
    createdDate: [''],
    updatedDate: ['']
  });

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    this.categoryId = Number(routeParams.get('categoryId'));

    this.categoriesService.getCategory(this.categoryId)
      .subscribe(res => {
        this.category = res.data;
        this.editForm.setValue(this.category);
      });
  }

  onEdit() {

    if (this.editForm.invalid) {
      return;
    }

    this.categoriesService.editCategory(this.categoryId, <Categories>this.editForm.value)
      .subscribe(res => {
        alert(res.message);
        this.goBack();
      },err => {
        alert(err.message);
      });
  }

  goBack() {
    this.location.back();
  }
}
