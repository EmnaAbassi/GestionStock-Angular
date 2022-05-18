import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ArticleService } from 'src/app/article.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Article } from 'src/app/article';


@Component({
  selector: 'app-detail-article',
  templateUrl: './detail-article.component.html',
  styleUrls: ['./detail-article.component.css']
})
export class DetailArticleComponent implements OnInit {

public articles! :Article[];
  constructor(private articleService: ArticleService,
    private router:Router) { }

  ngOnInit(): void {
  
  }

  
  }
    
    
  


