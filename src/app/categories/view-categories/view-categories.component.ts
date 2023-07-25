import { Component } from '@angular/core';
import { CategoriesService } from '../categories.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import { Categories } from '../../interfaces/categories';

@Component({
  selector: 'app-view-categories',
  templateUrl: './view-categories.component.html',
  styleUrls: ['./view-categories.component.scss']
})
export class ViewCategoriesComponent {
  
  categoryId!: number;
  category!: Categories;

  constructor(private categoriesService: CategoriesService, private route:ActivatedRoute, private location:Location){}
  

  ngOnInit():void{
    const routeParams = this.route.snapshot.paramMap;
    this.categoryId = Number(routeParams.get('categoryId'));
    
    this.categoriesService.getCategory(this.categoryId)
    .subscribe(res => this.category = res.data);
  }
  
  goBack(){
    this.location.back();
  }
}
