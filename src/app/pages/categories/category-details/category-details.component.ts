import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/category';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from 'src/app/category.service';

@Component({
  selector: 'app-category-details',
  templateUrl: './category-details.component.html',
  styleUrls: ['./category-details.component.css']
})
export class CategoryDetailsComponent implements OnInit {
id!:number;
category!:Category;
  constructor(private route:ActivatedRoute, 
    private categoryService:CategoryService) { }

  ngOnInit(): void {
    this.id= this.route.snapshot.params['id'];
    this.category = new Category();
    this.categoryService.getCategoryById(this.id).subscribe(
      data => {
        this.category = data;
      }
    )
  }

}
