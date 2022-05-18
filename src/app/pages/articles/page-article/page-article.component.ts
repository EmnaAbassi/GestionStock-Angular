import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Article } from 'src/app/article';
import { ArticleService } from 'src/app/article.service';

@Component({
  selector: 'app-page-article',
  templateUrl: './page-article.component.html',
  styleUrls: ['./page-article.component.css']
})
export class PageArticleComponent implements OnInit {
  public articles! : Article[];
    constructor(private router:Router,private articleService:ArticleService)
  {}

  ngOnInit(): void {
   /* let resp = this.articleService.getArticleList()
    resp.subscribe(data=>{this.article=data;
    console.log("he", this.article)})*/
    this.getArticle();
  }

  public getArticle():void{
    this.articleService.getArticleList().subscribe(
      data => {
        this.articles=data;
      }
    );
  }
  
  newArticle():void{
    this.router.navigate(['nouvelArticle']);
  }

 
      deleteArt(id:number){
        this.articleService.deleteArticle(id).subscribe(data =>
          {
            console.log(data);
            this.getArticle();
          })
      }

      DetailArt(id:number){
        this.router.navigate(['detailArticle',id]);
      }

      updateArt(id:number){
        this.router.navigate(['updateArticle',id]);


      }
  
    
  }
  

