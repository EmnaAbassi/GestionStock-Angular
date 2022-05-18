import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from 'src/app/category';
import { CategoryService } from 'src/app/category.service';

@Component({
  selector: 'app-update-category',
  templateUrl: './update-category.component.html',
  styleUrls: ['./update-category.component.css']
})
export class UpdateCategoryComponent implements OnInit {

  id!: number;
  category: Category = new Category();
  constructor(private categoryService: CategoryService,
   private route: ActivatedRoute,
   private router:Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.categoryService.getCategoryById(this.id).
    subscribe(data =>{this.category=data;
   },
   error=>console.log(error));
   
   }
  
   onSubmit():void{
     this.categoryService.UpdateCategory(this.id,this.category).subscribe(data =>
       {
               this.goToCategoryList();
       },
       error=> console.log(error)
       
       );
   }
 
 
 
   goToCategoryList(){
    this.router.navigate(['/categories']);
  }

  cancel(){
    this.router.navigate(['/categories']);
  }

}
