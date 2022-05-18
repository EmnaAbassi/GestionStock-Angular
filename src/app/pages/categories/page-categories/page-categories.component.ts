import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from 'src/app/category';
import { CategoryService } from 'src/app/category.service';

@Component({
  selector: 'app-page-categories',
  templateUrl: './page-categories.component.html',
  styleUrls: ['./page-categories.component.css']
})
export class PageCategoriesComponent implements OnInit {
public categories! : Category[];

  constructor(private router: Router,
    private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.getCategory();
  }
  
 public getCategory():void{
   this.categoryService.getCategoryList().subscribe(
     data => {
       this.categories=data;
     }
   );
 }

 updateCategory(id:number){
this.router.navigate(['updateCategory',id]);
 }

 deleteProduct(id:number){
  this.categoryService.deleteCategory(id).subscribe(data =>
    {
      console.log(data);
      this.getCategory();
    })
    console.log('suppression validée');
 }



 ProductDetails(id:number){
  this.router.navigate(['Category-details',id]);

 }







  newCategory():void{
    this.router.navigate(['nouvellecategorie']);
  }
}
