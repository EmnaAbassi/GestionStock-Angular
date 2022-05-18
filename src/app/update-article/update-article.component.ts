import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Article } from '../article';
import { ArticleService } from '../article.service';

@Component({
  selector: 'app-update-article',
  templateUrl: './update-article.component.html',
  styleUrls: ['./update-article.component.css']
})
export class UpdateArticleComponent implements OnInit {
 article: any;
  id!:number;
  constructor(private router:Router,private articleService:ArticleService,
    private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.articleService.getArticleById(this.id).
    subscribe(data =>{this.article=data;
   },
   error=>console.log(error));
  }

  UpdateArticle(){
    this.articleService.UpdateArticle(this.id,this.article)
    .subscribe(data=>{
      console.log(data);
      this.article=new Article();
      this.goToClientsList();
    }, error=> console.log(error));
  }
  onSubmit(){
    this.UpdateArticle();
  }
  
  goToClientsList(){
    this.router.navigate(['/articles']);
 }

  cancel(){
    this.router.navigate(['articles']);
  }
}
