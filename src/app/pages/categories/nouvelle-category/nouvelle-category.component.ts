import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Category } from 'src/app/category';
import { CategoryService } from 'src/app/category.service';

@Component({
  selector: 'app-nouvelle-category',
  templateUrl: './nouvelle-category.component.html',
  styleUrls: ['./nouvelle-category.component.css']
})
export class NouvelleCategoryComponent implements OnInit {
  [x: string]: any;

  category : Category = new Category();

  constructor(private router:Router,
    private categoryService: CategoryService) { }

  ngOnInit(): void {
  }
  
  public onAddCategory(addForm: NgForm): void {
    this.categoryService.addCategory(addForm.value).subscribe(
      (response: Category) =>{
        console.log(response);
      

      },
      (error: HttpErrorResponse )=> {
        alert(error.message);
      }
      );
        
      }
      saveCategory(){
        this.categoryService.addCategory(this.category).subscribe(
          data=>{
            console.log(data);
            this.goToCategoryList();
          },
          error=>console.log(error)
          
        );
      }

      goToCategoryList(){
         this.router.navigate(['/categories']);
      }
  
  onSubmit(){
    
    console.log(this.category);
    this.saveCategory();
   
  }



  cancel():void{
    this.router.navigate(['categories']);
  }

}
