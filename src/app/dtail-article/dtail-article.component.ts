import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Article } from '../article';
import { ArticleService } from '../article.service';

@Component({
  selector: 'app-dtail-article',
  templateUrl: './dtail-article.component.html',
  styleUrls: ['./dtail-article.component.css']
})
export class DtailArticleComponent implements OnInit {
  id!:number;
  article:any=[];
  constructor(private router:Router,private articleService:ArticleService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.article=new Article();
    this.articleService.getArticleById(this.id).subscribe(data=>{
         this.article=data;
    });
  }

  cancel(){
    this.router.navigate(['articles']);

  }
}
