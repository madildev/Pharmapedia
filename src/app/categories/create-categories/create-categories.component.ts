import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, Validators} from '@angular/forms';
import { Categories } from '../../interfaces/categories';
import { CategoriesService } from '../categories.service';

@Component({
  selector: 'app-create-categories',
  templateUrl: './create-categories.component.html',
  styleUrls: ['./create-categories.component.scss']
})
export class CreateCategoriesComponent {

  body:Categories = {
    id : 0,
    name: '',
    createdDate: '2023-07-24T12:00:23.443Z',
    updatedDate: '2023-07-24T12:00:23.443Z'
  }

  constructor(private location: Location,private categoriesService:CategoriesService, private formBuilder: FormBuilder){}

   createForm = this.formBuilder.group({
     name: ['',Validators.required]
   })
  
   onCreate(){
    
    if(this.createForm.invalid)
    {
      return;
    }

    this.body.name = this.createForm.get(['name'])?.value;
    this.categoriesService.createCategory(this.body)
     .subscribe(res=> {
        alert(res.message);
        this.goBack();
     }, err=>{
        alert(err.message);
     });
   }

  goBack(){
    this.location.back();
  }

}