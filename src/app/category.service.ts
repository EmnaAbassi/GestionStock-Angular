import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from './category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private basURL= "http://localhost:8080/api/v1/category";

  constructor(private httpClient:HttpClient) { }

public getCategoryList(): Observable<Category[]>{
  return this.httpClient.get<Category[]>(`${this.basURL}`);
}

public addCategory(category:Category): Observable<Category>{
  return this.httpClient.post<Category>(`${this.basURL}`, category);
}

getCategoryById(id:number): Observable<Category>{
  return this.httpClient.get<Category>(`${this.basURL}/${id}`)
}



public UpdateCategory(id:number,category:Category): Observable<Object>{
  return this.httpClient.put(`${this.basURL}/${id}`, category);
}

public deleteCategory(id:number):Observable<Object>{
  return this.httpClient.delete(`${this.basURL}/${id}`);
}










}
