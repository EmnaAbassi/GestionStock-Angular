import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Article } from './article';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  private basURL= "http://localhost:8080/api/v1/articles";

  constructor(private httpClient:HttpClient) { }

  /*public getArticleList(){
    return this.httpClient.get(`${this.basURL}`);
  }*/

  public getArticleList(): Observable<Article[]>{
    return this.httpClient.get<Article[]>(`${this.basURL}`);
  }
  
  
  public addArticle(article:Article): Observable<Article>{
    return this.httpClient.post<Article>(`${this.basURL}`, article);
  }

 


  
  getArticleById(id:number): Observable<Article>{
    return this.httpClient.get<Article>(`${this.basURL}/${id}`)
  }
  
  
  
  public UpdateArticle(id:number,article:Article): Observable<Object>{
    return this.httpClient.put(`${this.basURL}/${id}`, article);
  }
  
  public deleteArticle(id:number):Observable<Object>{
    return this.httpClient.delete(`${this.basURL}/${id}`);
  }

}
