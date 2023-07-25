import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { CategoriesService } from '../categories.service';
import { Categories } from 'src/app/interfaces/categories';

@Component({
  selector: 'app-delete-categories',
  templateUrl: './delete-categories.component.html',
  styleUrls: ['./delete-categories.component.scss']
})
export class DeleteCategoriesComponent {
   
  categoryId!:number;
  category!: Categories;

  constructor(private location: Location,private categoriesService: CategoriesService, private route:ActivatedRoute){}
  
  ngOnInit():void{
    const routeParams = this.route.snapshot.paramMap;
    this.categoryId = Number(routeParams.get('categoryId'));
    
    this.categoriesService.getCategory(this.categoryId)
    .subscribe(res => this.category = res.data);
 
  }

  goBack(){
    this.location.back();
  }

  onDelete(){
    this.categoriesService.deleteCategory(this.categoryId)
    .subscribe(res=> {
      alert(res.message);
      this.goBack();
    }, err => {
      alert(err.message);
    });
  }
}
