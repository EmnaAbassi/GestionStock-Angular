import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CommandeClient } from './commande-client';

@Injectable({
  providedIn: 'root'
})
export class CommandeClientService {
  private basURL= "http://localhost:8080/api/v1/CC";

  constructor(private httpClient:HttpClient) { }

  public getCCList(): Observable<CommandeClient[]>{
    return this.httpClient.get<CommandeClient[]>(`${this.basURL}`);
  }

 
  
  public addCC(cc:CommandeClient){
    return this.httpClient.post<CommandeClient>(`${this.basURL}`, cc);
  }
  
  getCCById(id:number): Observable<CommandeClient>{
    return this.httpClient.get<CommandeClient>(`${this.basURL}/${id}`)
  }
  
 
  
  public UpdateCC(id:number,cc:CommandeClient): Observable<Object>{
    return this.httpClient.put(`${this.basURL}/${id}`, cc);
  }
  
  public deleteCC(id:number):Observable<Object>{
    return this.httpClient.delete(`${this.basURL}/${id}`);
  }















}
