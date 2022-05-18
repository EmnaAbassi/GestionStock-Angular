import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Article } from 'src/app/article';
import { ArticleService } from 'src/app/article.service';

@Component({
  selector: 'app-nouvel-article',
  templateUrl: './nouvel-article.component.html',
  styleUrls: ['./nouvel-article.component.css']
})
export class NouvelArticleComponent implements OnInit {
   article: Article = new Article();

  constructor(private router:Router,
    private articleService: ArticleService) { }

  ngOnInit(): void {
  }
  
  public onAddArticle(addForm: NgForm): void {
    this.articleService.addArticle(addForm.value).subscribe(
      (response: Article) =>{
        console.log(response);
      

      },
      (error: HttpErrorResponse )=> {
        alert(error.message);
      }
      );
        
      }
      saveArticle(){
        this.articleService.addArticle(this.article).subscribe(
          data=>{
            console.log(data);
            this.goToCategoryList();
          },
          error=>console.log(error)
          
        );
      }

      goToCategoryList(){
         this.router.navigate(['/articles']);
      }
  
  onSubmit(){
    
    console.log(this.article);
    this.saveArticle();
   
  }
  cancel():void{
    this.router.navigate(['articles']);
  }
}
