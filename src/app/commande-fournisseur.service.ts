import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CommandeFournisseur } from './commande-fournisseur';

@Injectable({
  providedIn: 'root'
})
export class CommandeFournisseurService {

  private basURL= "http://localhost:8080/api/v1/CF";

  constructor(private httpClient:HttpClient) { }

  public getCFList(): Observable<CommandeFournisseur[]>{
    return this.httpClient.get<CommandeFournisseur[]>(`${this.basURL}`);
  }
  
  public addCF(CF:CommandeFournisseur){
    return this.httpClient.post<CommandeFournisseur>(`${this.basURL}`, CF);
  }
  
  getCFById(id:number): Observable<CommandeFournisseur>{
    return this.httpClient.get<CommandeFournisseur>(`${this.basURL}/${id}`)
  }
  
  
  
  public UpdateCF(id:number,article:CommandeFournisseur): Observable<Object>{
    return this.httpClient.put(`${this.basURL}/${id}`, article);
  }
  
  public deleteCF(id:number):Observable<Object>{
    return this.httpClient.delete(`${this.basURL}/${id}`);
  }
}