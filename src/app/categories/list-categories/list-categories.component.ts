import { Component } from '@angular/core';
import { CategoriesService } from '../categories.service';
import { Categories } from 'src/app/interfaces/categories';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-list-categories',
  templateUrl: './list-categories.component.html',
  styleUrls: ['./list-categories.component.scss']
})
export class ListCategoriesComponent {
  categories: Categories [] = [];

  constructor(private categoriesService: CategoriesService, private formBuilder:FormBuilder){}
  
  searchForm = this.formBuilder.group({
    searchString: ['']
  });
 
  ngOnInit(){
    this.categoriesService.getCategories()
    .subscribe(res=> this.categories = res.data);
  }
  
  onSearch(){
    let searchString:string = this.searchForm.get(['searchString'])?.value;
    if(searchString.length != 0)
    {
      this.categoriesService.searchCategory(searchString)
     .subscribe(res=> this.categories = res.data);
    }
    else
    {
      this.categoriesService.getCategories()
      .subscribe(res=> this.categories = res.data);
    }
  }
}
